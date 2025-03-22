function getBuildDate() {
    const formattedDate = new Date().toLocaleString("en-TH", {
        year: "numeric",
        month: "long", // Full month name
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Bangkok",
    }).replace(",", "")
    return formattedDate;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    env: {
        NEXT_PUBLIC_BUILD_DATE: getBuildDate(),
    },
};

export default nextConfig;
