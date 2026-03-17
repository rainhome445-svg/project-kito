import { mockCategories } from '@/data/mock';
import { notFound } from 'next/navigation';
import { BookOpen, ArrowLeft, Clock, Star, PlayCircle, CheckCircle2, Lock, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default async function LearnCategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const category = mockCategories.find((c) => c.id === id);

  if (!category) {
    notFound();
  }

  const modules = [
    { title: 'Introduction to ' + category.name, duration: '15 min', level: 'Beginner', isCompleted: true },
    { title: 'Core Mechanics of ' + category.name, duration: '25 min', level: 'Beginner', isCompleted: false },
    { title: 'Advanced ' + category.name + ' Strategies', duration: '40 min', level: 'Intermediate', isLocked: true },
    { title: 'The Future of ' + category.name, duration: '20 min', level: 'Advanced', isLocked: true },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
      <Link href="/learn" className="inline-flex items-center gap-2 text-blue-light hover:text-white transition-colors text-xs font-black uppercase tracking-widest mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Knowledge Protocol
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">
          <header className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="bg-blue-light/10 border border-blue-light/20 text-blue-light text-[10px] font-black px-2 py-1 rounded uppercase tracking-widest">
                KNOWLEDGE DOMAIN
              </span>
              <span className="text-[10px] font-black text-white/40 uppercase tracking-widest">
                {modules.length} MODULES
              </span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-none">
              {category.name}
            </h1>
            <p className="text-sm text-white/60 font-bold uppercase tracking-tight leading-relaxed max-w-2xl">
              {category.description} This comprehensive learning path covers everything from foundational principles to advanced institutional strategies.
            </p>
          </header>

          <div className="relative aspect-video rounded-md overflow-hidden border border-border-subtle bg-black group cursor-pointer">
            <Image 
              src={`https://picsum.photos/seed/${id}/1200/675`} 
              alt={category.name}
              fill
              className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
                <PlayCircle className="w-8 h-8 text-white ml-1" />
              </div>
            </div>
            <div className="absolute bottom-6 left-6 right-6">
               <div className="bg-black/60 backdrop-blur-md border border-white/10 p-4 rounded-md">
                  <div className="text-white font-black text-xs uppercase tracking-widest mb-1">INTRODUCTORY VIDEO</div>
                  <p className="text-[10px] text-white/60 font-bold uppercase tracking-tight">Watch a 5-minute overview of this knowledge domain.</p>
               </div>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-xl font-black text-white uppercase tracking-tighter border-b border-border-subtle pb-4">Learning Modules</h2>
            <div className="grid grid-cols-1 gap-4">
              {modules.map((module, i) => (
                <div key={i} className={`bg-surface border border-border-subtle rounded-md p-5 flex items-center justify-between group transition-all ${module.isLocked ? 'opacity-50 cursor-not-allowed' : 'hover:border-blue-light/30 cursor-pointer'}`}>
                  <div className="flex items-center gap-5">
                    <div className={`w-10 h-10 rounded-md flex items-center justify-center font-black text-sm ${module.isCompleted ? 'bg-emerald-bullish/20 text-emerald-bullish' : module.isLocked ? 'bg-white/5 text-white/20' : 'bg-blue-light/20 text-blue-light'}`}>
                      {module.isCompleted ? <CheckCircle2 className="w-5 h-5" /> : module.isLocked ? <Lock className="w-5 h-5" /> : i + 1}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-black text-white uppercase tracking-tight group-hover:text-blue-light transition-colors">{module.title}</h3>
                      <div className="flex items-center gap-3 text-[9px] font-black text-white/30 uppercase tracking-widest">
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {module.duration}</span>
                        <span className="flex items-center gap-1"><Star className="w-3 h-3" /> {module.level}</span>
                      </div>
                    </div>
                  </div>
                  {!module.isLocked && <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-blue-light group-hover:translate-x-1 transition-all" />}
                </div>
              ))}
            </div>
          </div>
        </div>

        <aside className="lg:col-span-4 space-y-8">
          <div className="bg-surface border border-border-subtle rounded-md p-6 space-y-6">
            <h3 className="text-xs font-black text-white uppercase tracking-widest border-b border-border-subtle pb-3">Your Progress</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-[10px] font-black uppercase tracking-tight">
                <span className="text-white/40">COMPLETION</span>
                <span className="text-blue-light">25%</span>
              </div>
              <div className="h-2 bg-black rounded-full overflow-hidden border border-border-subtle">
                <div className="h-full bg-blue-light" style={{ width: '25%' }} />
              </div>
              <p className="text-[10px] text-white/50 font-bold uppercase tracking-tight leading-relaxed">
                Complete 3 more modules to unlock the intermediate certification for this domain.
              </p>
            </div>
          </div>

          <div className="bg-blue-light p-6 rounded-md space-y-4 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
            <h3 className="text-lg font-black text-white uppercase tracking-tighter leading-none">Institutional Certification</h3>
            <p className="text-[10px] text-white/80 font-bold uppercase tracking-tight leading-relaxed">
              Pass the final assessment to receive a verified HGM Learn certificate, recognized by leading digital asset firms.
            </p>
            <button className="w-full bg-white text-black font-black py-3 rounded-md text-[10px] uppercase tracking-[0.2em] hover:bg-white/90 transition-colors">
              VIEW EXAM DETAILS
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
