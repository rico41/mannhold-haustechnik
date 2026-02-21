import { Skeleton } from "@/components/ui/skeleton"

interface SectionSkeletonProps {
    className?: string
}

export function SectionSkeleton({ className }: SectionSkeletonProps) {
    return (
        <section className={`w-full py-16 md:py-24 lg:py-32 flex flex-col items-center justify-center space-y-8 ${className}`}>
            <div className="container-custom max-w-4xl space-y-8">
                <Skeleton className="h-10 w-3/4 max-w-md mx-auto rounded-xl" />
                <Skeleton className="h-4 w-full max-w-2xl mx-auto rounded-xl" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                    <Skeleton className="h-[200px] w-full rounded-2xl" />
                    <Skeleton className="h-[200px] w-full rounded-2xl" />
                </div>
            </div>
        </section>
    )
}

export function HeroSkeleton() {
    return (
        <section className="w-full h-[80vh] min-h-[600px] flex items-center justify-center bg-muted/20">
            <Skeleton className="w-full h-full rounded-none opacity-50" />
        </section>
    )
}
