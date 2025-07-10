import React, { useState, useEffect } from "react";

function Settings() {
  const [settings, setSettings] = useState({
    siteName: "",
    logo: null,
    facebook: "",
    twitter: "",
    instagram: "",
    youtube: "",
    language: "ar",
  });

  useEffect(() => {
    const saved = localStorage.getItem("siteSettings");
    if (saved) {
      const parsed = JSON.parse(saved);
      setSettings(parsed);
      document.documentElement.dir = parsed.language === "ar" ? "rtl" : "ltr";
    }
  }, []);

  useEffect(() => {
    document.documentElement.dir = settings.language === "ar" ? "rtl" : "ltr";
  }, [settings.language]);

  const handleSave = () => {
    localStorage.setItem("siteSettings", JSON.stringify(settings));
    alert("تم حفظ الإعدادات بنجاح!");
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      const file = files[0];
      const imageURL = URL.createObjectURL(file);
      setSettings({ ...settings, logo: imageURL });
    } else {
      setSettings({ ...settings, [name]: value });
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 bg-white p-6 rounded shadow border-4 border-[rgb(31,171,232)]">
      <h2 className="text-2xl font-bold mb-6 text-[rgb(31,171,232)] text-center">إعدادات الموقع</h2>

      <div className="space-y-4">
        <div>
          <label className="block font-semibold">اسم الموقع:</label>
          <input
            type="text"
            name="siteName"
            value={settings.siteName}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-semibold">شعار الموقع:</label>
          <input type="file" name="logo" accept="image/*" onChange={handleChange} />
          {settings.logo && <img src={settings.logo} alt="Logo" className="mt-2 w-24 h-24 object-cover " />}
        </div>

        <div>
          <label className="block font-semibold">رابط فيسبوك:</label>
          <input
            type="text"
            name="facebook"
            value={settings.facebook}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-semibold">رابط الموقع:</label>
          <input
            type="text"
            name="twitter"
            value={settings.twitter}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-semibold mb-1">اللغة:</label>
          <select
            name="language"
            value={settings.language}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            <option value="ar">العربية</option>
            <option value="en">English</option>
          </select>
        </div>

        <button
          onClick={handleSave}
          className="bg-[rgb(31,171,232)] text-white px-6 py-2 mt-4 rounded hover:bg-blue-500"
        >
          حفظ الإعدادات
        </button>
      </div>
    </div>
  );
}

export default Settings;
