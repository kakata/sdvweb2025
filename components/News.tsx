import React, { useEffect, useState } from 'react';
import { SectionId, NewsItem, SocialPost } from '../types';
import { FALLBACK_NEWS, FALLBACK_SOCIAL_POSTS } from '../constants';
import { generateDynamicNews } from '../services/geminiService';
import { ArrowRight, Calendar, RefreshCw, Heart, MessageCircle, Instagram } from 'lucide-react';

export const News: React.FC = () => {
    const [newsData, setNewsData] = useState<NewsItem[]>([]);
    const [socialData, setSocialData] = useState<SocialPost[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            const data = await generateDynamicNews();

            if (data && data.news.length > 0) {
                setNewsData(data.news);
                setSocialData(data.instagram);
            } else {
                setNewsData(FALLBACK_NEWS);
                setSocialData(FALLBACK_SOCIAL_POSTS);
            }
            setLoading(false);
        };

        fetchNews();
    }, []);

    return (
        <section id={SectionId.NEWS} className="py-20 bg-white">
            <div className="container mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">Noticias y Eventos</h2>
                    <div className="w-24 h-1 bg-[#EF4444] mx-auto"></div>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        Mantente informado sobre las últimas actualizaciones, jornadas y avances en el mundo de la vacunología en República Dominicana.
                    </p>
                </div>

                {/* Main News Grid */}
                <div className="mb-20">
                    {loading ? (
                        /* Skeleton Loader News */
                        <div className="grid md:grid-cols-3 gap-8">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden h-full animate-pulse">
                                    <div className="w-full h-48 bg-slate-200"></div>
                                    <div className="p-6 flex flex-col gap-4">
                                        <div className="h-4 bg-slate-200 w-1/3 rounded"></div>
                                        <div className="h-6 bg-slate-200 w-3/4 rounded"></div>
                                        <div className="h-4 bg-slate-200 w-full rounded"></div>
                                        <div className="h-4 bg-slate-200 w-2/3 rounded"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-3 gap-8">
                            {newsData.map((news) => (
                                <div key={news.id} className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden hover:shadow-xl transition duration-300 flex flex-col h-full group hover:border-[#EF4444]/20">
                                    <div className="relative overflow-hidden">
                                        <img
                                            src={news.imageUrl}
                                            alt={news.title}
                                            className="w-full h-48 object-cover transform group-hover:scale-105 transition duration-500"
                                        />
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#EF4444] text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                                            <Calendar size={12} />
                                            {news.date}
                                        </div>
                                    </div>
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold text-[#1A1A1A] mb-3 line-clamp-2 group-hover:text-[#EF4444] transition-colors">{news.title}</h3>
                                        <p className="text-slate-600 mb-6 line-clamp-3 flex-grow">{news.summary}</p>
                                        <a
                                            href={news.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#EF4444] font-semibold hover:text-red-700 transition-colors flex items-center gap-2 mt-auto w-max group/btn"
                                        >
                                            Leer más
                                            <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Instagram Section */}
                <div className="mt-16">
                    <div className="flex items-center justify-center gap-3 mb-10">
                        <div className="p-3 bg-red-50 rounded-full text-[#EF4444]">
                            <Instagram size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-[#1A1A1A]">En las Redes</h3>
                    </div>

                    {loading ? (
                        /* Skeleton Loader Instagram */
                        <div className="grid md:grid-cols-3 gap-6">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="bg-white rounded-lg shadow border border-slate-100 p-4 animate-pulse">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-slate-200"></div>
                                        <div className="h-3 w-24 bg-slate-200 rounded"></div>
                                    </div>
                                    <div className="w-full aspect-square bg-slate-200 rounded mb-3"></div>
                                    <div className="h-3 w-3/4 bg-slate-200 rounded"></div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-3 gap-8">
                            {socialData.map((post) => (
                                <div key={post.id} className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition duration-300">
                                    {/* Insta Header */}
                                    <div className="flex items-center gap-3 p-4 border-b border-slate-50">
                                        <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-red-600 p-[2px]">
                                            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                                                <img
                                                    src={`https://ui-avatars.com/api/?name=${post.username}&background=0D8ABC&color=fff`}
                                                    alt={post.username}
                                                    className="w-10 h-10 rounded-full mr-3"
                                                />
                                            </div>
                                        </div>
                                        <span className="text-sm font-semibold text-slate-800">{post.username}</span>
                                    </div>

                                    {/* Image */}
                                    <div className="relative aspect-square overflow-hidden bg-slate-100 group">
                                        <img src={post.imageUrl} alt="Instagram Post" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white font-bold">
                                            <div className="flex items-center gap-2">
                                                <Heart className="fill-current" /> {post.likes}
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <MessageCircle className="fill-current" /> {Math.floor(post.likes / 10)}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Actions & Caption */}
                                    <div className="p-4">
                                        <div className="flex gap-4 mb-3 text-slate-700">
                                            <Heart size={24} className="hover:text-red-600 cursor-pointer transition-colors" />
                                            <MessageCircle size={24} className="hover:text-blue-600 cursor-pointer transition-colors" />
                                        </div>
                                        <div className="text-sm text-slate-800 mb-2 font-semibold">
                                            {post.likes} Me gusta
                                        </div>
                                        <p className="text-sm text-slate-600 line-clamp-3">
                                            <span className="font-semibold text-slate-800 mr-2">{post.username}</span>
                                            {post.caption}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {!loading && (
                    <div className="text-center mt-12">
                        <p className="text-sm text-slate-400 italic flex items-center justify-center gap-2">
                            <RefreshCw size={12} />
                            Contenido generado dinámicamente por IA.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};