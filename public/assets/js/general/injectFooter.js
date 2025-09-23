const footerHTML = `
    <footer class="text-center text-lg-start bg-dark text-light border-top border-2 border-light">
        <div class="container py-4">
            <div class="row align-items-center">
                <!-- Logo and brand -->
                <div class="col-md-6 text-md-start mb-3 mb-md-0">
                    <a href="/" class="d-flex align-items-center text-decoration-none text-light">
                        <img src="/assets/images/icons/logo.png" 
                            alt="Mass Debater Hacker" 
                            class="rounded-circle me-2 icon-large">
                        <span class="fw-bold">Mass Debate Notes</span>
                    </a>
                </div>

                <!-- Social media -->
                <div class="col-md-6 text-md-end">
                    <a href="#" class="text-light me-3"><i class="bi bi-facebook fs-5"></i></a>
                    <a href="#" class="text-light me-3"><i class="bi bi-twitter fs-5"></i></a>
                    <a href="#" class="text-light me-3"><i class="bi bi-discord fs-5"></i></a>
                    <a href="#" class="text-light"><i class="bi bi-github fs-5"></i></a>
                </div>
            </div>

            <hr class="my-3 border-light">

            <!-- Copyright -->
            <div class="text-center small text-secondary">
                &copy; ${new Date().getFullYear()} Mass Debate Platform. All rights reserved.
            </div>
        </div>
    </footer>
`;

const footerContainer = document.getElementById("footer");

if (footerContainer) {
    footerContainer.innerHTML = footerHTML;
}