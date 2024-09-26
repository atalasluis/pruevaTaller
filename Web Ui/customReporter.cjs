const fs = require('fs');
const path = require('path');

class CustomReporter {
  onRunComplete(_, results) {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();

    const numPassedTests = results.numPassedTests;
    const numFailedTests = results.numFailedTests;
    
    const report = {
      date: date,
      time: time,
      passedTests: numPassedTests,
      failedTests: numFailedTests
    };

    // Ruta donde se guardará el archivo de reporte JSON
    const reportPath = path.resolve(__dirname, 'jest-report.json');

    // Leer el contenido existente del archivo si existe
    let reports = [];
    if (fs.existsSync(reportPath)) {
      const existingData = fs.readFileSync(reportPath, 'utf-8');
      reports = JSON.parse(existingData);
    }

    // Añadir el nuevo reporte
    reports.push(report);

    // Escribir el reporte actualizado en formato JSON
    fs.writeFileSync(reportPath, JSON.stringify(reports, null, 2));
    
  }
}

module.exports = CustomReporter;
