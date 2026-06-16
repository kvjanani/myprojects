export default function VideoPage() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-6">
      <video
        controls
        className="w-full max-w-4xl rounded-2xl shadow-2xl"
      >
        <source src="/intern video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </main>
  );
}