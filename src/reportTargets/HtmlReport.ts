import fs from 'fs';
import { OutputTarget } from '../Summary';

export class HtmlReport implements OutputTarget {
  print(report: string): void {
    const html = `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">  
            </head>
            <body>
                <div>
                    <h1>Analisys Output</h1>
                    <p>${report}</p>
                </div>
            </body>
        </html>
    `;

    fs.writeFileSync('report.html', html);
  }
}
