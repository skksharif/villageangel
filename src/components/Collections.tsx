import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Collections() {
  const collections = [
    {
      title: 'Sarees',
      description: 'Elegant traditional sarees with intricate designs',
      image: 'https://imgs.search.brave.com/7nZp1VsboHDm5LCdOXWVEEFOW1LLaCdW_eGXbDYO6DI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzExLzI2LzAzLzYw/LzM2MF9GXzExMjYw/MzYwMjZfSWdLc3NV/R3Y2dmZndGZTUGNQ/dFBwZ0NNRlNiRmxo/akQuanBn',
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Lehengas',
      description: 'Stunning lehengas for special occasions',
      image: 'https://imgs.search.brave.com/cxZIUzBWdUCTGUIpSGMcAT8RsAPpn6xcnsK-tGRGuPg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/a2Fsa2lmYXNoaW9u/LmNvbS9ibG9ncy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyNC8w/Ny84LU11c3QtSGF2/ZS1QYXJ0eS1XZWFy/LUxlaGVuZ2FzLVRo/YXQtV2lsbC1TdGVh/bC10aGUtU2hvdy0x/NTM2eDk3Ny5qcGc',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Kurtis',
      description: 'Contemporary kurtis for everyday elegance',
      image: 'https://imgs.search.brave.com/_vYHIsV1HdywsiFAQX_kPLBh__yhqLETgAHLqb8m0kE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubXludGFzc2V0/cy5jb20vZHByXzIs/cV82MCx3XzIxMCxj/X2xpbWl0LGZsX3By/b2dyZXNzaXZlL2Fz/c2V0cy9pbWFnZXMv/Mjg5Mjc3NDgvMjAy/NC80LzEzL2ZkYjQy/YTk5LWMzZWEtNDA2/MS05ODNhLTMyYTFk/MzJmZThkMzE3MTMw/MTcwOTYyODlLdXJ0/aXMxLmpwZw',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Anarkalis',
      description: 'Graceful anarkali suits with timeless appeal',
      image: 'https://imgs.search.brave.com/IiGpZSVhCsWWd6xMzcwfz_9MBHxrctlu438ePM3ghAA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9waW5r/cGh1bGthcmkuY29t/L2Nkbi9zaG9wL2Zp/bGVzL3BpbmthbmRv/cmFuZ2VhbmFya2Fs/aXN1aXRzZXQtMV80/MDB4LndlYnA_dj0x/NzQyNTE3OTIw',
      color: 'from-orange-500 to-red-500'
    },

    {
      title: '',
      description: 'Exquisite bridal collections for your special day',
      image: 'https://imgs.search.brave.com/df_z2u876nmSIN2P7AgvZLMnv9xXlvtm5xleZAeLn1E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bW9oaWZhc2hpb24u/Y29tL2Nkbi9zaG9w/L2FydGljbGVzL01v/aGlfQnJpZGFsX0Jh/bm5lcl8zLmpwZz92/PTE3MTY1NTQ3OTQm/d2lkdGg9MTEwMA',
      color: 'from-rose-500 to-pink-500'
    }
  ];

  return (
    <section id="collections" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-light text-amber-900 mb-4 font-['Dancing_Script']">
            Our Collections
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-gold-500 to-gold-300 rounded-full mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our curated selection of authentic boutique dresses, each piece carefully crafted to celebrate tradition and elegance.
          </p>
        </motion.div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${collection.color} opacity-60 group-hover:opacity-40 transition-opacity duration-300`}></div>
                
                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  <h3 className="text-2xl font-semibold mb-2 font-['Dancing_Script']">
                    {collection.title}
                  </h3>
                  <p className="text-sm opacity-90 mb-4 group-hover:opacity-100 transition-opacity duration-300">
                    {collection.description}
                  </p>
                  
                  {/* Explore button */}
                  <div className="flex items-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <span>Explore Collection</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}