import React from 'react'
import { View, Text, Share } from 'react-native';
import ActionButton from '../../../components/Button'

// import Pdf from 'react-native-pdf';
// import { Viewer } from '@react-pdf-viewer/core';
// import PDFView from 'react-native-view-pdf';
// import { Pdf, PdfUtil } from 'react-native-pdf-light'



const ViewPDFComponent = ({reportDetails}) => {
    
    const source = 'data:application/pdf;base64,'+reportDetails;
    
        const DownloadPdf = () => {
            const linkSource = `data:application/pdf;base64,${reportDetails}`;
            // const downloadLink = document.createElement("a");
            const downloadLink = document.createElement("a")
            const fileName = "abc.pdf";
            downloadLink.href = linkSource;
            downloadLink.download = fileName;
            downloadLink.click();
        }
    // PdfUtil.getPageCount(source).then(console.log)

    return (
       <View>
           <ActionButton text="Download Report" onPress={DownloadPdf}/>
       </View>
            
    )
}

export default ViewPDFComponent
