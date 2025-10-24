import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-2xl rounded-2xl w-full max-w-3xl p-8 border border-gray-300">
        
        {/* LOGO Y ENCABEZADO */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 uppercase">
            Servicio Nacional de Aprendizaje
          </h1>
          <h2 className="text-lg mt-2 font-semibold text-gray-700">
            Formación para el trabajo
          </h2>
          <button className="mt-4 bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition">
            Conocer más
          </button>
        </div>

        <hr className="my-6 border-gray-400" />

        {/* PROGRAMAS DE FORMACIÓN */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-5">
            Programas de formación
          </h3>
          <div className="flex flex-wrap justify-center gap-5">
            {["ADSO", "Animación 3D", "Redes de Datos"].map((programa, i) => (
              <div
                key={i}
                className="border border-gray-300 rounded-xl px-8 py-5 bg-orange-50 text-gray-800 font-medium hover:bg-orange-100 hover:scale-105 transition-transform shadow-sm"
              >
                {programa}
              </div>
            ))}
          </div>
        </div>

        <hr className="my-6 border-gray-400" />

        {/* CONTACTO */}
        <div className="text-center">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Contacto</h3>
          <form className="flex flex-col items-center space-y-4">
            <input
              type="text"
              placeholder="Nombre"
              className="border border-gray-400 rounded-md px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              placeholder="Correo"
              className="border border-gray-400 rounded-md px-4 py-2 w-72 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <textarea
              placeholder="Mensaje"
              className="border border-gray-400 rounded-md px-4 py-2 w-72 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-orange-500"
            ></textarea>
            <button className="bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700 transition">
              Contactar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
