/**
 * script.js - Staff Contact Cards with Multilingual Support (English & Arabic)
 * Dynamic vCard generator compatible with iOS Safari, Android, macOS & Windows.
 */

const onflapTranslations = {
    "Ajil K.V": {
        en: {
            pageTitle: "Ajil K.V - Onflap Technologies",
            name: "Ajil K.V",
            title: "Director",
            aboutText: "Director at Onflap Technologies, driving global business strategies and leading technical innovation in software engineering and cloud solutions.",
            address: "Kerala, India",
            vcardTitle: "Director",
            vcardNote: "Director at Onflap Technologies."
        },
        ar: {
            pageTitle: "أجيل كيه في - شركة أون فلاب للتكنولوجيا",
            name: "أجيل كيه في",
            title: "مدير تنفيذي",
            aboutText: "مدير تنفيذي في شركة أون فلاب للتكنولوجيا، قيادة استراتيجيات الأعمال العالمية والابتكار التقني في هندسة البرمجيات والحلول السحابية.",
            address: "كيرالا، الهند",
            vcardTitle: "مدير تنفيذي",
            vcardNote: "مدير تنفيذي - شركة أون فلاب للتكنولوجيا."
        }
    },
    "Anu Rosebell": {
        en: {
            pageTitle: "Anu Rosebell - Onflap Technologies",
            name: "Anu Rosebell",
            title: "Director",
            aboutText: "Director at Onflap Technologies enabling business growth through strategy, systems, and digital transformation. Building scalable, human-centered solutions for modern organizations.",
            address: "Kerala, India",
            vcardTitle: "Director",
            vcardNote: "Director at Onflap Technologies."
        },
        ar: {
            pageTitle: "آنو روزبيل - شركة أون فلاب للتكنولوجيا",
            name: "آنو روزبيل",
            title: "مديرة تنفيذية",
            aboutText: "مديرة تنفيذية في شركة أون فلاب للتكنولوجيا لتمكين نمو الأعمال من خلال الاستراتيجيات والأنظمة والتحول الرقمي. بناء حلول تقنية متطورة وقابلة للتوسع.",
            address: "كيرالا، الهند",
            vcardTitle: "مديرة تنفيذية",
            vcardNote: "مديرة تنفيذية - شركة أون فلاب للتكنولوجيا."
        }
    },
    "Emitiyas NM": {
        en: {
            pageTitle: "Emitiyas NM - Onflap Technologies",
            name: "Emitiyas NM",
            title: "Director",
            aboutText: "Director at Onflap Technologies, fostering client partnerships, operational excellence, and enterprise-grade tech architecture.",
            address: "Kerala, India",
            vcardTitle: "Director",
            vcardNote: "Director at Onflap Technologies."
        },
        ar: {
            pageTitle: "إمتياز إن إم - شركة أون فلاب للتكنولوجيا",
            name: "إمتياز إن إم",
            title: "مدير تنفيذي",
            aboutText: "مدير تنفيذي في شركة أون فلاب للتكنولوجيا، تعزيز شراكات العملاء والتميز التشغيلي والبنى التحتية التكنولوجية للمؤسسات الكبرى.",
            address: "كيرالا، الهند",
            vcardTitle: "مدير تنفيذي",
            vcardNote: "مدير تنفيذي - شركة أون فلاب للتكنولوجيا."
        }
    },
    "Lijesh Paul": {
        en: {
            pageTitle: "Lijesh Paul - Onflap Technologies",
            name: "Lijesh Paul",
            title: "Director",
            aboutText: "Director at Onflap Technologies, fostering a culture of technological excellence and continuous development and deployment pipelines.",
            address: "Kerala, India",
            vcardTitle: "Director",
            vcardNote: "Director at Onflap Technologies."
        },
        ar: {
            pageTitle: "ليجيش بول - شركة أون فلاب للتكنولوجيا",
            name: "ليجيش بول",
            title: "مدير تنفيذي",
            aboutText: "مدير تنفيذي في شركة أون فلاب للتكنولوجيا، ترسيخ ثقافة التميز التقني ومسارات التطوير والنشر المستمر للتطبيقات السحابية.",
            address: "كيرالا، الهند",
            vcardTitle: "مدير تنفيذي",
            vcardNote: "مدير تنفيذي - شركة أون فلاب للتكنولوجيا."
        }
    }
};

let currentLang = 'en';
let isTransitioning = false;

function getCurrentMemberKey() {
    const bodyName = document.body.getAttribute('data-name');
    if (bodyName && onflapTranslations[bodyName]) return bodyName;
    return Object.keys(onflapTranslations)[0];
}

function setLanguage(lang, smooth = true) {
    const key = getCurrentMemberKey();
    const tGroup = onflapTranslations[key];
    if (!tGroup || !tGroup[lang] || isTransitioning) return;
    
    const container = document.querySelector('.main-container');
    const t = tGroup[lang];

    const applyDOMUpdates = () => {
        currentLang = lang;

        document.documentElement.lang = lang;
        document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
        document.body.setAttribute('dir', (lang === 'ar') ? 'rtl' : 'ltr');
        if (lang === 'ar') {
            document.body.classList.add('rtl-mode');
        } else {
            document.body.classList.remove('rtl-mode');
        }

        document.title = t.pageTitle;

        const nameEl = document.querySelector('.profile-name');
        const titleEl = document.querySelector('.profile-title');
        const aboutEl = document.querySelector('.about-card p');
        const langBtn = document.getElementById('langToggleBtn');
        const saveContactBtn = document.getElementById('saveContactBtn');
        const emailBtn = document.querySelector('.btn-email');

        if (nameEl) nameEl.textContent = t.name;
        if (titleEl) titleEl.textContent = t.title;
        if (aboutEl) aboutEl.textContent = t.aboutText;
        if (langBtn) {
            langBtn.querySelector('.lang-btn-text').textContent = (lang === 'en' ? 'العربية' : 'English');
            langBtn.setAttribute('aria-label', (lang === 'en' ? 'Switch to Arabic' : 'التحويل إلى الإنجليزية'));
        }
        if (saveContactBtn) {
            saveContactBtn.innerHTML = `<i class="fas fa-address-card"></i> ${lang === 'ar' ? 'حفظ جهة الاتصال' : 'Save Contact'}`;
        }
        if (emailBtn) {
            emailBtn.innerHTML = `<i class="fas fa-paper-plane"></i> ${lang === 'ar' ? 'مراسلتي' : 'Email Me'}`;
        }
        const qubytzCtaText = document.querySelector('.qubytz-cta-text');
        const qubytzCardCta = document.querySelector('.qubytz-card-cta');
        const ctaText = lang === 'ar' ? 'قم بتخصيص بطاقة NFC الخاصة بك مع كيوبيتز اليوم' : 'Customize your NFC Card with Qubytz Today';
        if (qubytzCtaText) qubytzCtaText.textContent = ctaText;
        if (qubytzCardCta) qubytzCardCta.title = ctaText;

        const phoneSpan = document.querySelector('.contact-row[href^="tel:"] .contact-text');
        const memberPhone = document.body.getAttribute('data-phone') || '';
        if (phoneSpan && memberPhone) {
            phoneSpan.setAttribute('dir', 'ltr');
            phoneSpan.textContent = memberPhone.replace(/(\+\d{2})(\d{5})(\d{5})/, '$1 $2 $3');
        }

    };

    if (smooth && container) {
        isTransitioning = true;
        container.classList.add('lang-fading');
        
        setTimeout(() => {
            applyDOMUpdates();
            container.classList.remove('lang-fading');
            setTimeout(() => {
                isTransitioning = false;
            }, 300);
        }, 180);
    } else {
        applyDOMUpdates();
    }
}

function toggleLanguage() {
    const nextLang = currentLang === 'en' ? 'ar' : 'en';
    setLanguage(nextLang, true);
}

window.toggleLanguage = toggleLanguage;

function downloadVCard(contact) {
    try {
        const key = getCurrentMemberKey();
        const t = onflapTranslations[key][currentLang];
        
        if (!contact || typeof contact !== 'object') {
            const body = document.body;
            contact = {
                name: t.name,
                title: t.vcardTitle,
                company: 'Onflap Technologies',
                phone: body.getAttribute('data-phone') || '',
                email: body.getAttribute('data-email') || '',
                website: body.getAttribute('data-website') || 'https://www.onflap.com',
                address: t.address,
                note: t.vcardNote
            };
        }

        const name = contact.name || t.name;
        const nameParts = name.trim().split(/\s+/);
        const firstName = nameParts[0] || '';
        const lastName = nameParts.slice(1).join(' ') || '';
        const orgName = contact.company || contact.org || 'Onflap Technologies';

        const vCardLines = [
            'BEGIN:VCARD',
            'VERSION:3.0',
            `N:${lastName};${firstName};;;`,
            `FN:${name}`,
            `ORG:${orgName}`,
            `TITLE:${contact.title || t.vcardTitle}`
        ];

        if (contact.phone) {
            vCardLines.push(`TEL;TYPE=CELL,VOICE:${contact.phone}`);
        }
        if (contact.email) {
            vCardLines.push(`EMAIL;TYPE=PREF,INTERNET:${contact.email}`);
        }
        if (contact.website) {
            vCardLines.push(`URL:${contact.website}`);
        }
        if (contact.address) {
            vCardLines.push(`ADR;TYPE=WORK:;;${contact.address};;;;`);
        }

        vCardLines.push('END:VCARD');
        const vCardData = vCardLines.join('\r\n');
        const filename = `${name.replace(/\s+/g, '_')}.vcf`;

        const userAgent = window.navigator.userAgent || '';
        const isIOS = /iPad|iPhone|iPod/.test(userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

        const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8;' });
        const url = window.URL || window.webkitURL;
        const blobUrl = url.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.style.display = 'none';
        link.href = blobUrl;
        link.download = filename;
        link.setAttribute('download', filename);
        document.body.appendChild(link);
        link.click();

        if (isIOS) {
            setTimeout(() => {
                try {
                    const base64Data = btoa(unescape(encodeURIComponent(vCardData)));
                    const dataUrl = 'data:text/vcard;charset=utf-8;base64,' + base64Data;
                    
                    const iosLink = document.createElement('a');
                    iosLink.style.display = 'none';
                    iosLink.href = dataUrl;
                    iosLink.download = filename;
                    iosLink.setAttribute('download', filename);
                    document.body.appendChild(iosLink);
                    iosLink.click();
                    
                    setTimeout(() => {
                        if (iosLink.parentNode) iosLink.parentNode.removeChild(iosLink);
                    }, 1000);
                } catch (e) {
                    window.location.href = 'data:text/vcard;charset=utf-8,' + encodeURIComponent(vCardData);
                }
            }, 300);
        }

        setTimeout(() => {
            if (link.parentNode) {
                link.parentNode.removeChild(link);
            }
            url.revokeObjectURL(blobUrl);
        }, 3000);

    } catch (err) {
        console.error('vCard Download Error:', err);
    }
}

window.downloadVCard = downloadVCard;

document.addEventListener('DOMContentLoaded', () => {
    // Page always begins in English by default. Language changes ONLY when toggle button is clicked.

    const saveContactBtn = document.getElementById('saveContactBtn');
    if (saveContactBtn && !saveContactBtn.onclick) {
        saveContactBtn.addEventListener('click', () => {
            downloadVCard();
        });
    }

    const langToggleBtn = document.getElementById('langToggleBtn');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', toggleLanguage);
    }
});
