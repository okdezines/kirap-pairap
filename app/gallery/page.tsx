import GalleryPageContent from "../components/GalleryPageContent";
import CircularGallery from "../components/CircularGallery";

export default function GalleryPage() {
    return (
        <main>
            <CircularGallery />

            {/* Keep the original gallery underneath while we build */}
            <GalleryPageContent />
        </main>
    );
}