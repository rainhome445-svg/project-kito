import { GraduationCap, BookOpen, Users, Award, ArrowRight, PlayCircle, Star, Clock, Globe, Search, Filter, Shield, Zap, Database, Code } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function CampusPage() {
  const courses = [
    { id: 1, title: 'Introduction to Bitcoin & Blockchain', level: 'Beginner', duration: '4 Weeks', rating: 4.8, students: '12K+', image: 'https://picsum.photos/seed/course1/800/600', category: 'FUNDAMENTALS' },
    { id: 2, title: 'DeFi Mastery: Yield Farming & Liquidity', level: 'Advanced', duration: '6 Weeks', rating: 4.9, students: '8K+', image: 'https://picsum.photos/seed/course2/800/600', category: 'DEFI' },
    { id: 3, title: 'Ethereum Smart Contract Development', level: 'Intermediate', duration: '8 Weeks', rating: 4.7, students: '5K+', image: 'https://picsum.photos/seed/course3/800/600', category: 'DEVELOPMENT' },
    { id: 4, title: 'Crypto Market Analysis & Trading', level: 'Intermediate', duration: '5 Weeks', rating: 4.6, students: '15K+', image: 'https://picsum.photos/seed/course4/800/600', category: 'TRADING' },
    { id: 5, title: 'Layer 2 Scaling & Rollup Architecture', level: 'Advanced', duration: '7 Weeks', rating: 4.9, students: '3K+', image: 'https://picsum.photos/seed/course5/800/600', category: 'INFRASTRUCTURE' },
    { id: 6, title: 'Web3 Security & Smart Contract Auditing', level: 'Advanced', duration: '10 Weeks', rating: 5.0, students: '2K+', image: 'https://picsum.photos/seed/course6/800/600', category: 'SECURITY' },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 lg:py-10">
      
      {/* Header - High Density */}
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 border-b border-border-subtle pb-10">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-blue-light font-black text-[10px] uppercase tracking-[0.2em]">
            <GraduationCap className="w-3 h-3" /> Educational Protocol
          </div>
          <h1 className="text-4xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-none">
            HGM <span className="text-blue-light">Campus</span>
          </h1>
          <p className="text-xs text-white/50 font-bold max-w-2xl uppercase tracking-tight">
            Master the technical and economic foundations of the decentralized web through institutional-grade curricula.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/30" />
            <input 
              type="text" 
              placeholder="SEARCH COURSES..." 
              className="w-full bg-surface border border-border-subtle rounded-md py-2.5 pl-9 pr-4 text-[10px] font-black text-white placeholder:text-white/20 focus:outline-none focus:border-blue-light/50 transition-colors uppercase tracking-widest"
            />
          </div>
          <button className="bg-surface border border-border-subtle p-2.5 rounded-md hover:bg-white/5 transition-colors">
            <Filter className="w-4 h-4 text-white/60" />
          </button>
        </div>
      </div>

      {/* Stats Bar - High Density */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {[
          { label: 'ACTIVE STUDENTS', value: '50K+', icon: Users },
          { label: 'EXPERT MENTORS', value: '120+', icon: Award },
          { label: 'COURSES AVAILABLE', value: '45+', icon: BookOpen },
          { label: 'COUNTRIES REACHED', value: '180+', icon: Globe }
        ].map((stat, i) => (
          <div key={i} className="bg-surface border border-border-subtle rounded-md p-4 flex items-center gap-4 group hover:border-blue-light/30 transition-all">
            <div className="w-10 h-10 bg-black border border-border-subtle rounded-md flex items-center justify-center group-hover:bg-blue-light/10 transition-colors">
              <stat.icon className="w-5 h-5 text-blue-light" />
            </div>
            <div>
              <div className="text-lg font-black text-white uppercase tracking-tighter leading-none">{stat.value}</div>
              <div className="text-[8px] text-white/30 font-black uppercase tracking-widest">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Popular Courses - High Density */}
      <div className="space-y-8 mb-20">
        <div className="flex items-center justify-between border-b border-border-subtle pb-4">
          <h2 className="text-xs font-black text-white uppercase tracking-widest">Available Curricula</h2>
          <div className="flex gap-2">
            {['ALL', 'FUNDAMENTALS', 'DEFI', 'DEV', 'TRADING'].map((tab) => (
              <button key={tab} className={`text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded transition-colors ${tab === 'ALL' ? 'bg-white text-black' : 'text-white/40 hover:text-white hover:bg-white/5'}`}>
                {tab}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <div key={course.id} className="bg-surface border border-border-subtle rounded-md overflow-hidden group hover:border-white/20 transition-all flex flex-col">
              <div className="relative aspect-video overflow-hidden">
                <Image 
                  src={course.image} 
                  alt={course.title}
                  fill
                  className="object-cover opacity-50 group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-md border border-white/10 px-2 py-1 rounded text-[8px] font-black text-white uppercase tracking-widest">
                  {course.level}
                </div>
                <div className="absolute bottom-3 right-3 bg-blue-light/20 backdrop-blur-md border border-blue-light/30 px-2 py-1 rounded text-[8px] font-black text-blue-light uppercase tracking-widest">
                  {course.category}
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-blue-light flex items-center justify-center text-white shadow-2xl">
                    <PlayCircle className="w-6 h-6 ml-0.5" />
                  </div>
                </div>
              </div>
              <div className="p-5 space-y-4 flex-1 flex flex-col">
                <h3 className="text-base font-black text-white leading-tight uppercase tracking-tight group-hover:text-blue-light transition-colors line-clamp-2">
                  {course.title}
                </h3>
                <div className="flex items-center justify-between text-[9px] font-black uppercase tracking-tighter text-white/40">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" /> {course.duration}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3 h-3" /> {course.students} ENROLLED
                  </div>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="w-3 h-3 fill-current" /> {course.rating}
                  </div>
                </div>
                <div className="pt-4 border-t border-border-subtle mt-auto">
                  <button className="w-full bg-white text-black font-black py-2.5 rounded-md text-[9px] uppercase tracking-[0.2em] hover:bg-white/90 transition-colors">
                    ENROLL IN COURSE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Learning Paths - High Density */}
      <div className="bg-black border border-border-subtle rounded-md p-8 lg:p-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[url('https://picsum.photos/seed/learning-bg/1920/1080')] opacity-5 pointer-events-none" />
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="text-blue-light font-black text-[10px] uppercase tracking-[0.2em]">STRUCTURED PATHWAYS</div>
              <h2 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                Zero to <span className="text-blue-light">Expert</span>
              </h2>
              <p className="text-xs text-white/50 font-bold uppercase tracking-tight leading-relaxed max-w-xl">
                Follow curated learning paths designed by industry veterans to take you from foundational concepts to professional-grade expertise.
              </p>
            </div>
            <div className="space-y-4">
              {[
                { title: 'DeFi Architect', icon: Zap, desc: 'Master yield farming, liquidity, and protocol design.' },
                { title: 'Blockchain Developer', icon: Code, desc: 'Learn Solidity, Rust, and smart contract security.' },
                { title: 'Market Analyst', icon: Database, desc: 'On-chain forensics and technical analysis mastery.' }
              ].map((path, i) => (
                <div key={i} className="flex items-center gap-5 p-4 bg-surface border border-border-subtle rounded-md group hover:border-blue-light/30 transition-all cursor-pointer">
                  <div className="w-10 h-10 bg-black border border-border-subtle rounded-md flex items-center justify-center group-hover:bg-blue-light/10 transition-colors">
                    <path.icon className="w-5 h-5 text-blue-light" />
                  </div>
                  <div className="space-y-0.5">
                    <div className="text-[11px] font-black text-white uppercase tracking-tight group-hover:text-blue-light transition-colors">{path.title}</div>
                    <p className="text-[9px] text-white/40 font-bold uppercase tracking-tighter leading-tight">{path.desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-white/20 ml-auto group-hover:text-blue-light group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </div>
          <div className="relative aspect-square max-w-md mx-auto lg:ml-auto w-full rounded-2xl overflow-hidden border border-border-subtle shadow-2xl group">
             <Image 
              src="https://picsum.photos/seed/campus-mock/800/800" 
              alt="Campus Interface"
              fill
              className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 space-y-4">
               <div className="bg-blue-light/20 backdrop-blur-md border border-blue-light/30 p-4 rounded-md">
                  <div className="text-white font-black text-xs uppercase tracking-widest mb-1">VERIFIED CERTIFICATES</div>
                  <p className="text-[9px] text-white/60 font-bold uppercase tracking-tight">Earn industry-recognized credentials to showcase your expertise on LinkedIn and beyond.</p>
               </div>
               <button className="w-full bg-white text-black font-black py-3 rounded-md text-[10px] uppercase tracking-[0.2em] hover:bg-white/90 transition-colors">
                START LEARNING TODAY
               </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
