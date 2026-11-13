import React, { useEffect, useMemo, useState } from "react";
type VideoItem = {
  id: string;
  title: string;
  url: string;
  source: string;
  author: string;
  originalVideo: string;
  uploadTime: string;
  [key: string]: any;
};
type StudentVideosPageProps = {
  mediaList?: VideoItem[];
  videos?: VideoItem[];
  onAddMedia?: (item: any) => void;
  onUpdateMedia?: (item: any) => void;
  onDeleteMedia?: (id: string) => void;
  onAddVideo?: (item: any) => void;
  onUpdateVideo?: (item: any) => void;
  onDeleteVideo?: (id: string) => void;
  [key: string]: any;
};
const STORAGE_KEY = "thcs_my_hoa_student_videos";
const emptyForm = {
  title: "",
  url: "",
  source: "",
  author: "",
  originalVideo: "",
  uploadTime: new Date().toISOString().slice(0, 10),
};
function createId() {
  return `video_${Date.now()}_${Math.random()
    .toString(36)
    .slice(2, 8)}`;
}

function readLocalVideos(): VideoItem[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

function isValidUrl(value: string) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "https:" || parsed.protocol === "http:";
  } catch {
    return false;
  }
}

export function StudentVideosPage(props: StudentVideosPageProps = {}) {
  const externalVideos = props.mediaList ?? props.videos;

  const [localVideos, setLocalVideos] = useState<VideoItem[]>(
    readLocalVideos
  );

  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");

  const videos = useMemo(
    () => externalVideos ?? localVideos,
    [externalVideos, localVideos]
  );

  useEffect(() => {
    if (externalVideos === undefined) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(localVideos));
    }
  }, [externalVideos, localVideos]);

  const updateLocal = (next: VideoItem[]) => {
    setLocalVideos(next);
  };

  const resetForm = () => {
    setForm({
      ...emptyForm,
      uploadTime: new Date().toISOString().slice(0, 10),
    });
    setEditingId(null);
    setError("");
    setShowForm(false);
  };
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = event.target;
    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };
  const handleEdit = (video: VideoItem) => {
    setForm({
      title: video.title ?? "",
      url: video.url ?? "",
      source: video.source ?? "",
      author: video.author ?? "",
      originalVideo: video.originalVideo ?? "",
      uploadTime: video.uploadTime ?? "",
    });
    setEditingId(video.id);
    setShowForm(true);
    setError("");
  };
  const handleSave = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    if (!form.title.trim()) {
      setError("Vui lòng nhập tên bài giảng.");
      return;
    }
    if (!isValidUrl(form.url.trim())) {
      setError(
        "Đường link video không hợp lệ. Hãy nhập link HTTP hoặc HTTPS."
      );
      return;
    }
    if (
      form.originalVideo.trim() &&
      !isValidUrl(form.originalVideo.trim())
    ) {
      setError("Link video gốc không hợp lệ.");
      return;
    }
    const item: VideoItem = {
      id: editingId ?? createId(),
      title: form.title.trim(),
      url: form.url.trim(),
      source: form.source.trim(),
      author: form.author.trim(),
      originalVideo: form.originalVideo.trim(),
      uploadTime: form.uploadTime,
    };
    if (editingId) {
      if (props.onUpdateMedia) {
        props.onUpdateMedia(item);
      } else if (props.onUpdateVideo) {
        props.onUpdateVideo(item);
      } else {
        updateLocal(
          localVideos.map((video) =>
            video.id === editingId ? item : video
          )
        );
      }
    } else {
      if (props.onAddMedia) {
        props.onAddMedia(item);
      } else if (props.onAddVideo) {
        props.onAddVideo(item);
      } else {
        updateLocal([item, ...localVideos]);
      }
    }
    resetForm();
  };
  const handleDelete = (id: string) => {
    const confirmed = window.confirm(
      "Bạn có chắc chắn muốn xóa bài giảng này không?"
    );
    if (!confirmed) return;

    if (props.onDeleteMedia) {
      props.onDeleteMedia(id);
    } else if (props.onDeleteVideo) {
      props.onDeleteVideo(id);
    } else {
      updateLocal(localVideos.filter((video) => video.id !== id));
    }
    if (editingId === id) {
      resetForm();
    }
  };
  const filteredVideos = videos.filter((video) => {
    const keyword = search.toLowerCase();
    return (
      (video.title ?? "").toLowerCase().includes(keyword) ||
      (video.author ?? "").toLowerCase().includes(keyword) ||
      (video.source ?? "").toLowerCase().includes(keyword)
    );
  });
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-6 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="rounded-3xl bg-gradient-to-r from-blue-900 to-blue-600 p-6 text-white shadow-lg sm:p-8">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-100">
                THCS MỸ HÒA
              </p>
              <h1 className="mt-2 text-2xl font-black sm:text-3xl">
                VIDEO BÀI GIẢNG
              </h1>
              <p className="mt-2 text-sm text-blue-100">
                Kho học liệu video phục vụ dạy và học trực tuyến.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                setForm({
                  ...emptyForm,
                  uploadTime: new Date().toISOString().slice(0, 10),
                });
                setEditingId(null);
                setError("");
                setShowForm(true);
              }}
              className="rounded-xl bg-white px-5 py-3 font-bold text-blue-800 shadow transition hover:bg-blue-50"
            >
              + THÊM VIDEO BÀI GIẢNG
            </button>
          </div>
        </header>
        <section className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-bold text-slate-800">
                Danh sách bài giảng
              </h2>
              <p className="mt-1 text-sm text-slate-500">
                Tổng số: {videos.length} video
              </p>
            </div>
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Tìm tên bài giảng, tác giả, nguồn..."
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500 sm:max-w-sm"
            />
          </div>
        </section>
        {showForm && (
          <section className="rounded-2xl border border-blue-200 bg-white p-5 shadow-md sm:p-7">
            <div className="mb-5 flex items-center justify-between gap-3">
              <h2 className="text-xl font-bold text-slate-800">
                {editingId
                  ? "CHỈNH SỬA BÀI GIẢNG"
                  : "THÊM VIDEO BÀI GIẢNG"}
              </h2>
              <button
                type="button"
                onClick={resetForm}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-500 hover:bg-slate-100"
              >
                Đóng ✕
              </button>
            </div>
            <form
              onSubmit={handleSave}
              className="grid gap-4 sm:grid-cols-2"
            >
              <label className="space-y-2 sm:col-span-2">
                <span className="text-sm font-semibold text-slate-700">
                  Tên bài giảng *
                </span>
                <input
                  name="title"
                  value={form.title}
                  onChange={handleChange}
                  required
                  placeholder="Nhập tên video bài giảng"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </label>
              <label className="space-y-2 sm:col-span-2">
                <span className="text-sm font-semibold text-slate-700">
                  Nhập link video *
                </span>
                <input
                  name="url"
                  type="url"
                  value={form.url}
                  onChange={handleChange}
                  required
                  placeholder="https://..."
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">
                  Nguồn video
                </span>
                <input
                  name="source"
                  value={form.source}
                  onChange={handleChange}
                  placeholder="Ví dụ: YouTube, VTV..."
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">
                  Tên tác giả
                </span>
                <input
                  name="author"
                  value={form.author}
                  onChange={handleChange}
                  placeholder="Nhập tên tác giả"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </label>
              <label className="space-y-2 sm:col-span-2">
                <span className="text-sm font-semibold text-slate-700">
                  Video gốc (link nguồn ban đầu)
                </span>
                <input
                  name="originalVideo"
                  type="url"
                  value={form.originalVideo}
                  onChange={handleChange}
                  placeholder="https://..."
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </label>
              <label className="space-y-2">
                <span className="text-sm font-semibold text-slate-700">
                  Thời gian đăng tải
                </span>

                <input
                  name="uploadTime"
                  type="date"
                  value={form.uploadTime}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none focus:border-blue-500"
                />
              </label>
              {error && (
                <p className="rounded-xl bg-red-50 p-3 text-sm font-medium text-red-700 sm:col-span-2">
                  {error}
                </p>
              )}

              <div className="flex flex-wrap gap-3 sm:col-span-2">
                <button
                  type="submit"
                  className="rounded-xl bg-blue-700 px-6 py-3 font-bold text-white transition hover:bg-blue-800"
                >
                  {editingId ? "LƯU THAY ĐỔI" : "THÊM BÀI GIẢNG"}
                </button>

                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-xl border border-slate-300 px-6 py-3 font-semibold text-slate-700 hover:bg-slate-100"
                >
                  HỦY
                </button>
              </div>
            </form>
          </section>
        )}

        <section className="grid gap-4 md:grid-cols-2">
          {filteredVideos.map((video) => (
            <article
              key={video.id}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md"
            >
              <div className="border-b border-slate-100 bg-slate-50 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-bold text-slate-800">
                      {video.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-500">
                      Tác giả: {video.author || "Chưa cập nhật"}
                    </p>
                  </div>
                  <span className="rounded-lg bg-blue-100 px-3 py-1 text-xs font-bold text-blue-700">
                    VIDEO
                  </span>
                </div>
              </div>
              <div className="space-y-3 p-5 text-sm text-slate-600">
                <p>
                  <strong>Nguồn:</strong>{" "}
                  {video.source || "Chưa cập nhật"}
                </p>
                <p>
                  <strong>Thời gian đăng tải:</strong>{" "}
                  {video.uploadTime || "Chưa cập nhật"}
                </p>
                <p className="break-all">
                  <strong>Link video:</strong>{" "}
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-700 underline"
                  >
                    Mở video bài giảng
                  </a>
                </p>
                {video.originalVideo && (
                  <p className="break-all">
                    <strong>Video gốc:</strong>{" "}
                    <a
                      href={video.originalVideo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-blue-700 underline"
                    >
                      Xem nguồn gốc
                    </a>
                  </p>
                )}
                <div className="flex flex-wrap gap-2 border-t border-slate-100 pt-4">
                  <button
                    type="button"
                    onClick={() => handleEdit(video)}
                    className="rounded-lg bg-amber-100 px-4 py-2 font-semibold text-amber-800 hover:bg-amber-200"
                  >
                    Chỉnh sửa
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(video.id)}
                    className="rounded-lg bg-red-100 px-4 py-2 font-semibold text-red-700 hover:bg-red-200"
                  >
                    Xóa bài giảng
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>
        {filteredVideos.length === 0 && (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-12 text-center">
            <p className="text-lg font-bold text-slate-700">
              Chưa có video bài giảng
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Hãy thêm video bài giảng hoặc thử từ khóa tìm kiếm khác.
            </p>
          </div>
        )}
        <footer className="pb-6 text-center text-xs text-slate-400">
          CHINH PHỤC TRI THỨC SỐ
        </footer>
      </div>
    </main>
  );
}
export default StudentVideosPage;
