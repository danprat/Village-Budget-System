import React from 'react';
import Sidebar from './Sidebar';

const HomePage: React.FC = () => {
    return (
        <div className="h-screen bg-gray-100 flex">
            <Sidebar />
            <div className="flex-1">
                <header className="bg-blue-200 p-4 text-center">
                    <h1 className="text-5xl font-extrabold text-gray-800">Nama Desa</h1>
                    <nav className="mt-2">
                        <ul className="flex justify-center space-x-4">
                            <li><a href="#" className="text-gray-700 hover:text-gray-900">Beranda</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-gray-900">Profil Desa</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-gray-900">Informasi Publik</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-gray-900">Layanan</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-gray-900">Galeri</a></li>
                        </ul>
                    </nav>
                </header>
                <div className="container mx-auto p-6 pt-8 bg-white shadow-lg rounded-lg mt-4">
                    <main>
                        <section className="mb-8">
                            <h2 className="text-3xl font-semibold text-gray-700">Informasi Penting</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                                <div className="p-4 border rounded-lg bg-gray-50">
                                    <h3 className="font-bold">Jumlah Penduduk</h3>
                                    <p className="text-2xl">1,234</p>
                                </div>
                                <div className="p-4 border rounded-lg bg-gray-50">
                                    <h3 className="font-bold">Cuaca Lokal</h3>
                                    <p className="text-2xl">25°C, Cerah</p>
                                </div>
                                <div className="p-4 border rounded-lg bg-gray-50">
                                    <h3 className="font-bold">Jadwal Kegiatan</h3>
                                    <p className="text-2xl">Kegiatan Desa: 14 Feb</p>
                                </div>
                            </div>
                        </section>
                        <section>
                            <h2 className="text-3xl font-semibold text-gray-700">Pengumuman Terbaru</h2>
                            <ul className="list-disc list-inside mt-3 text-gray-600">
                                <li>Pengumuman 1: Rapat Warga pada 15 Feb</li>
                                <li>Pengumuman 2: Pendaftaran KTP baru dibuka</li>
                            </ul>
                        </section>
                    </main>
                    <footer className="text-center mt-8">
                        <p className="text-gray-500">&copy; {new Date().getFullYear()} Nama Desa</p>
                    </footer>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
