import BgImage from './components/BgImage';
import SectionTop from './components/SectionTop';
import SectionMain from './components/SectionMain';

export default function Home() {
    return (
        <>
            <main className="container relative m-auto h-full min-h-screen px-4 py-4 pb-[117px] pt-[141px]">
                <div className="m-auto w-full max-w-[1380px]">
                    <BgImage
                        src={'/images/top-img.webp'}
                        className="h-full max-h-[77px] w-full max-w-[1650px]"
                    />
                    <div className="shadow-3xl">
                        <SectionTop />
                        <SectionMain />
                    </div>
                </div>
            </main>
        </>
    );
}
