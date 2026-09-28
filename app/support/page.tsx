import { Suspense } from "react";
import SupportPageContent from "../components/SupportPageContent";

export default function SupportPage() {
    return (
        <Suspense fallback={null}>
            <SupportPageContent />
        </Suspense>
    );
}