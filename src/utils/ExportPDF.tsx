// utils/pdf-utils.ts
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const exportToPdf = async (elementId: string, filename: string = 'document.pdf') => {
  const element = document.getElementById(elementId);
  if (!element) {
    console.error(`Element with id "${elementId}" not found.`);
    return;
  }

  const canvas = await html2canvas(element, {
    scale: 2, // Increase scale for better resolution
    useCORS: true, // Needed for images from external sources
  });

  const imgData = canvas.toDataURL('image/png');
  const pdf = new jsPDF('p', 'mm', 'a4');
  const imgProps = pdf.getImageProperties(imgData);
  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

  pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
  pdf.save(filename);
};


// App.tsx
// import React from 'react';
// import { exportToPdf } from './utils/pdf-utils';

// const App: React.FC = () => {
//   const handleExport = () => {
//     exportToPdf('content-to-export', 'my-report.pdf');
//   };

//   return (
//     <div>
//       <button onClick={handleExport}>Download as PDF</button>
//       <div id="content-to-export">
//         {/* Your content here, styled with Tailwind */}
//         <h1 className="text-2xl font-bold">PDF Content</h1>
//         <p>This is the content to be exported.</p>
//       </div>
//     </div>
//   );
// };

// export default App;