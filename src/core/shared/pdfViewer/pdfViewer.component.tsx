import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '@react-pdf-viewer/core/lib/styles/index.css';

import { scrollModePlugin } from '@react-pdf-viewer/scroll-mode';
import { thumbnailPlugin } from '@react-pdf-viewer/thumbnail';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/thumbnail/lib/styles/index.css';


interface ViewerWrapperProps {
    fileUrl: string;
}

const ViewerWrapper: React.FC<ViewerWrapperProps> = ({ fileUrl }) => {
    const thumbnailPluginInstance = thumbnailPlugin();
    const scrollModePluginInstance = scrollModePlugin();
    const { Thumbnails } = thumbnailPluginInstance;

    return <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <div className="rpv-core__viewer"
            style={{
                border: '1px solid rgba(0, 0, 0, 0.3)',
                display: 'flex',
                height: '532px',
                padding: 24,
            }}>
            <div style={{ flex: '1 0 auto', background: 'red', height: '484px', margin: 0, padding: 0 }}>
                <Viewer fileUrl={fileUrl} plugins={[thumbnailPluginInstance, scrollModePluginInstance]} />
            </div>
            <div
                style={{
                    borderRight: '1px solid rgba(0, 0, 0, 0.3)',
                    overflow: 'auto',
                    width: '30%',
                    flex: '0 0 auto',
                }}>
                <Thumbnails />
            </div>
        </div>
    </Worker>
};

export default ViewerWrapper