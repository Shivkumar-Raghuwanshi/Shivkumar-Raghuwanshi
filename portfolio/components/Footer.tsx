export default function Footer() {
  return (
    <footer className="flex items-center justify-between flex-wrap bg-white border-t border-gray-200 p-6">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <p>&copy; {new Date().getFullYear()} Shivkumar Raghuwanshi</p>
      </div>
    </footer>
  );
}
