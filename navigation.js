// Navigation component for Spring Boot Notes
(function() {
    'use strict';

    // Navigation data
    const navigationData = [
        { title: "🏠 Home", url: "index.html", icon: "🏠" },
        { title: "🚀 Project Setup", url: "Spring Boot Complete Guide 23580893a74580268eb5f04765b02e5b.html", icon: "🚀" },
        { title: "⛵ Dependencies", url: "Spring Dependencies 23580893a745806899f5fedaf31ba435.html", icon: "⛵" },
        { title: "🗄️ Database Config", url: "Database configuration 23680893a745801ebde1dc2054a7c3cb.html", icon: "🗄️" },
        { title: "💻 Code Setup", url: "Code Level Setup Basics 23780893a7458076833dc81b952d4480.html", icon: "💻" },
        { title: "🏷️ Annotations", url: "Annotations and it's use 23780893a74580538dadc41233897a21.html", icon: "🏷️" },
        { title: "🔒 Spring Security", url: "Spring Security 24580893a7458076bd9bf990e56926eb.html", icon: "🔒" },
        { title: "🛡️ Security Config", url: "Security Configuration 24980893a74580eeaf97e1ecc9cc485b.html", icon: "🛡️" },
        { title: "🎫 JWT Auth", url: "JSON Web Token Authentication 24580893a7458077bdcef84c15e0ce6c.html", icon: "🎫" },
        { title: "🔍 JWT Filter", url: "JwtFilter (Custom Filter) 24580893a745805689eacc5e89a8b4ca.html", icon: "🔍" },
        { title: "📧 Email Config", url: "Email Configuration 24c80893a745809b9941d5bafd025c72.html", icon: "📧" },
        { title: "📊 Swagger UI", url: "Swagger -UI configuration 24e80893a74580a08a90df67eee40218.html", icon: "📊" },
        { title: "🔧 Other Topics", url: "Other Important things 24380893a745808a948ce118142e1dda.html", icon: "🔧" }
    ];

    // Create navigation HTML
    function createNavigation() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        
        const navHTML = `
            <div id="spring-boot-nav" style="
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                background: linear-gradient(135deg, #6db33f 0%, #4d8029 100%);
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                z-index: 1000;
                padding: 10px 0;
            ">
                <div style="
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 0 20px;
                ">
                    <div style="
                        display: flex;
                        align-items: center;
                        gap: 15px;
                    ">
                        <img src="https://www.notion.so/icons/arrow-up_blue.svg" 
                             style="width: 40px; height: 40px; filter: brightness(0) invert(1);">
                        <h3 style="
                            color: white;
                            margin: 0;
                            font-size: 1.4rem;
                            font-weight: 600;
                        ">Spring Boot Guide</h3>
                    </div>
                    
                    <div style="
                        display: flex;
                        align-items: center;
                        gap: 10px;
                    ">
                        <select id="page-selector" style="
                            background: rgba(255,255,255,0.1);
                            color: white;
                            border: 1px solid rgba(255,255,255,0.3);
                            border-radius: 6px;
                            padding: 8px 12px;
                            font-size: 14px;
                            outline: none;
                            cursor: pointer;
                            min-width: 200px;
                        ">
                            <option value="">Navigate to...</option>
                            ${navigationData.map(item => `
                                <option value="${item.url}" ${item.url === currentPage ? 'selected' : ''}>
                                    ${item.title}
                                </option>
                            `).join('')}
                        </select>
                        
                        <button id="nav-toggle" style="
                            background: rgba(255,255,255,0.1);
                            color: white;
                            border: 1px solid rgba(255,255,255,0.3);
                            border-radius: 6px;
                            padding: 8px 12px;
                            cursor: pointer;
                            font-size: 14px;
                        ">☰ Menu</button>
                    </div>
                </div>
                
                <div id="mobile-menu" style="
                    display: none;
                    background: rgba(0,0,0,0.1);
                    padding: 20px;
                    margin-top: 10px;
                ">
                    <div style="
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                        gap: 10px;
                        max-width: 1200px;
                        margin: 0 auto;
                    ">
                        ${navigationData.map(item => `
                            <a href="${item.url}" style="
                                display: flex;
                                align-items: center;
                                gap: 10px;
                                color: white;
                                text-decoration: none;
                                padding: 10px 15px;
                                border-radius: 6px;
                                background: rgba(255,255,255,0.1);
                                transition: all 0.3s ease;
                                ${item.url === currentPage ? 'background: rgba(255,255,255,0.2); font-weight: bold;' : ''}
                            " onmouseover="this.style.background='rgba(255,255,255,0.2)'" 
                               onmouseout="this.style.background='${item.url === currentPage ? 'rgba(255,255,255,0.2)' : 'rgba(255,255,255,0.1)'}'">
                                <span style="font-size: 18px;">${item.icon}</span>
                                <span>${item.title.replace(/^\p{Emoji}\s*/u, '')}</span>
                            </a>
                        `).join('')}
                    </div>
                </div>
            </div>
            
            <div style="height: 80px;"></div>
        `;
        
        return navHTML;
    }

    // Create back to top button
    function createBackToTop() {
        const backToTopHTML = `
            <button id="back-to-top" style="
                position: fixed;
                bottom: 30px;
                right: 30px;
                background: #6db33f;
                color: white;
                width: 50px;
                height: 50px;
                border: none;
                border-radius: 50%;
                cursor: pointer;
                font-size: 20px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                transition: all 0.3s ease;
                z-index: 999;
                display: none;
            " onmouseover="this.style.background='#4d8029'; this.style.transform='translateY(-2px)'"
               onmouseout="this.style.background='#6db33f'; this.style.transform='translateY(0)'">
                ↑
            </button>
        `;
        return backToTopHTML;
    }

    // Initialize navigation
    function initNavigation() {
        // Add navigation to the page
        document.body.insertAdjacentHTML('afterbegin', createNavigation());
        document.body.insertAdjacentHTML('beforeend', createBackToTop());

        // Add body margin to account for fixed header
        document.body.style.paddingTop = '0';

        // Page selector functionality
        const pageSelector = document.getElementById('page-selector');
        if (pageSelector) {
            pageSelector.addEventListener('change', function() {
                if (this.value) {
                    window.location.href = this.value;
                }
            });
        }

        // Mobile menu toggle
        const navToggle = document.getElementById('nav-toggle');
        const mobileMenu = document.getElementById('mobile-menu');
        if (navToggle && mobileMenu) {
            navToggle.addEventListener('click', function() {
                if (mobileMenu.style.display === 'none' || !mobileMenu.style.display) {
                    mobileMenu.style.display = 'block';
                    navToggle.textContent = '✕ Close';
                } else {
                    mobileMenu.style.display = 'none';
                    navToggle.textContent = '☰ Menu';
                }
            });
        }

        // Back to top functionality
        const backToTopBtn = document.getElementById('back-to-top');
        if (backToTopBtn) {
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 300) {
                    backToTopBtn.style.display = 'block';
                } else {
                    backToTopBtn.style.display = 'none';
                }
            });

            backToTopBtn.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const nav = document.getElementById('spring-boot-nav');
            if (nav && !nav.contains(event.target)) {
                if (mobileMenu) {
                    mobileMenu.style.display = 'none';
                    navToggle.textContent = '☰ Menu';
                }
            }
        });

        // Responsive behavior
        function handleResize() {
            if (window.innerWidth > 768) {
                if (mobileMenu) {
                    mobileMenu.style.display = 'none';
                    navToggle.textContent = '☰ Menu';
                }
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize(); // Call once on init
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initNavigation);
    } else {
        initNavigation();
    }
})();
