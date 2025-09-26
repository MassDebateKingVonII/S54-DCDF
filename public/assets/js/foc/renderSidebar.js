// /assets/js/foc/renderSidebar.js

const fopModule = {
    title: "ST2413 - FOC",
    banner: "/assets/images/foc/banner.jpg",
    menu: [
        { type: "link", label: "Introduction", href: "/foc/intro" },
        {
            type: "dropdown",
            label: "Tutorial",
            id: "tutorialDropdown",
            items: [
                { label: "1A - Basic Structures Of Computers", href: "/foc/tut/1A" },
                { label: "1B - Fetch, Execution and IO", href: "/foc/tut/1B" },
                { label: "2 - Digital Representation", href: "/foc/tut/2" },
                { label: "3 - Introduction to Computer Networks", href: "/foc/tut/3" },
                { label: "4 - Network Devices", href: "/foc/tut/4" },
                { label: "5 - TCP/IP", href: "/foc/tut/5" },
                { label: "6A - Ubuntu Linux Installation", href: "/foc/tut/6A" },
                { label: "6B - Ubuntu Linux Quick Tour", href: "/foc/tut/6B" },
                { label: "7 - FileSystem Basics", href: "/foc/tut/7" },
                { label: "8 - Network Application Configuration", href: "/foc/tut/8" },
                { label: "9A - Users and Groups User and Group Administration Process", href: "/foc/tut/9A" },
                { label: "9B - HTTP", href: "/foc/tut/9B" },
                { label: "10 - Introduction to Cloud Computing", href: "/foc/tut/9B" },
            ],
        },
        { type: "link", label: "Mock Papers", href: "/foc/papers" },
        { type: "link", label: "References & Resources", href: "/foc/references" },
    ],
};

// --- Usage ---
renderSidebar(fopModule); // fopModule defined elsewhere
highlightActiveLink();


