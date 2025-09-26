// /assets/js/fop/renderSidebar.js

const fopModule = {
    title: "ST0523 - FOP",
    banner: "/assets/images/fop/banner.png",
    menu: [
        { type: "link", label: "Introduction", href: "/fop/intro" },
        {
            type: "dropdown",
            label: "Tutorial",
            id: "tutorialDropdown",
            items: [
                { label: "1 - Data Types", href: "/fop/tut/1" },
                { label: "2 - Operators", href: "/fop/tut/2" },
                { label: "3 - Looping", href: "/fop/tut/3" },
                { label: "4 - Functions", href: "/fop/tut/4" },
                { label: "5 - Conditional Programming", href: "/fop/tut/5" },
                { label: "6 - Array", href: "/fop/tut/6" },
                { label: "7 - Object Literals And Methods", href: "/fop/tut/7" },
                { label: "8 - Array Of Objects", href: "/fop/tut/8" },
            ],
        },
        { type: "link", label: "Mock Papers", href: "/fop/papers" },
        { type: "link", label: "References & Additional Resources", href: "/fop/references" },
    ],
};

// --- Usage ---
renderSidebar(fopModule); // fopModule defined elsewhere
highlightActiveLink();


