export default function Footer() {
  return (
    <footer className="mt-auto py-8 px-4 md:px-8 lg:px-16 bg-[#0a0a0a] border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} <span className="text-[#D4A05A]">Rich Deal</span> барбершоп
          </p>

          <p>
            Сайт разработал{" "}
            <a
              href="https://github.com/Max-IT04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#D4A05A] transition-all"
            >
              Max Roschin
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}