import React from 'react';

const HomePage: React.FC = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Nama Desa</h1>
                    <nav className="mt-2">
                        <ul className="flex space-x-4">
                            <li><a href="/" className="text-gray-700 hover:text-gray-900">Beranda</a></li>
                            <li><a href="/budgetProposal" className="text-gray-700 hover:text-gray-900">Pengelolaan Proposal Anggaran</a></li>
                            <li><a href="/login" className="text-gray-700 hover:text-gray-900">Login</a></li>
                            <li><a href="/about" className="text-gray-700 hover:text-gray-900">Tentang Kami</a></li>
                            <li><a href="/contact" className="text-gray-700 hover:text-gray-900">Kontak</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <main className="flex-grow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">Informasi Penting</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                            <div className="p-4 bg-white shadow rounded-lg">
                                <h3 className="text-lg font-bold">Jumlah Penduduk</h3>
                                <p className="text-xl">1,234</p>
                            </div>
                            <div className="p-4 bg-white shadow rounded-lg">
                                <h3 className="text-lg font-bold">Cuaca Lokal</h3>
                                <p className="text-xl">25°C, Cerah</p>
                            </div>
                            <div className="p-4 bg-white shadow rounded-lg">
                                <h3 className="text-lg font-bold">Jadwal Kegiatan</h3>
                                <p className="text-xl">Kegiatan Desa: 14 Feb</p>
                            </div>
                        </div>
                    </section>
                    <section>
                        <h2 className="text-2xl font-bold text-gray-900">Pengumuman Terbaru</h2>
                        <ul className="list-disc list-inside mt-3 text-gray-600">
                            <li>Pengumuman 1: Rapat Warga pada 15 Feb</li>
                            <li>Pengumuman 2: Pendaftaran KTP baru dibuka</li>
                        </ul>
                    </section>
                </div>
            </main>
            <footer className="bg-gray-800 text-white text-center py-4">
                <p>&copy; {new Date().getFullYear()} Nama Desa</p>
            </footer>
        </div>
    );
};

export default HomePage;
