document.addEventListener("DOMContentLoaded", () => {
    const langLinks = document.querySelectorAll(".lang-content a");
    
    langLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const selectedLang = link.getAttribute("data-lang");
            switchLanguage(selectedLang);
        });
    });
    function switchLanguage(lang) {
        const translations = {
            en: {
                navbar: ["Home", "Donation", "Membership", "Prayer Time", "Event", "Contact Us"],
                aboutDropdown: ["History", "Our Team", "Our Mission"],
                header: "“Whoever builds a mosque for Allah, Allah will build for him a house like it in Paradise.”",
                source: "Source: Ṣaḥīḥ al-Bukhārī 450, Ṣaḥīḥ Muslim 533",
                donate: "Donate",
                follow: "Follow Us",
                bismillah: "بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ",
                language: "Language",
                about: "About Us",
                langDropdown:["English","Bangla","Arabic","Japanese"],
                footer: {
                    title: "Masjidul-Aqsa",
                    location: "Palestine",
                    Quick:"Quick Links",
                    quickLinks: ["History", "Activities", "Donation", "Prayer Time", "Contact Us"],
                    contactTitle: "Contact Info",
                    contact: {
                        address: "Palestine",
                        email: "masjidulaqsa@gmail.com",
                        phone: "+49 176 5779 1221",
                        website: "www.Masjidul-Al-Aqsa.com",
                        facebook: "Facebook"
                    }
                },
                historySection: {
                    title: "History of Masjidul-Al-Aqsa",
                    pick: '"From a Humble Dream to a Grand Vision: Growing Together by the Grace of Allah"',
                    details: [
                        "Al-Aqsa Mosque, mosque in Jerusalem, located in the Old City at the terminal point of the Prophet Muhammad’s Isrāʾ journey. According to Islamic sources, the Qurʾān (17:1) indicates that Muhammad was miraculously transported one night from Mecca (al-masjid al-ḥaram, or 'the sacred place of worship') to this site in Jerusalem (al-masjid al-aqṣā, 'the farther place of worship'). On that spot, he led Abraham, Moses, Jesus, and other messengers (rusul) of God in ritual prayer (ṣalāt). That same night he was taken up to heaven from the site of the Dome of the Rock for an encounter with God (see Miʿrāj).",
                        "In modern times, the mosque and the plaza have become a particular point of tension in the Arab-Israeli conflict. Apart from its importance to Muslims, the plaza holds significance for Jews as the site of the Temple of Jerusalem, whose Herodian incarnation was destroyed in 70 CE. The Temple Mount, as Jews refer to the plaza, and the adjacent Western Wall have since served as a site of pilgrimage. During the Six-Day War (1967), Israel occupied East Jerusalem and its Old City. Israel later annexed East Jerusalem, but the plaza was left under the custodianship of an Islamic trust (waqf) maintained by the Hashemite dynasty in Jordan."
                    ]
                }
            },
            bn: {
                navbar: ["মূল পৃষ্ঠা", "দান করুন", "সদস্যপদ", "নামাজের সময়", "ইভেন্ট", "যোগাযোগ করুন"],
                aboutDropdown: ["ইতিহাস", "আমাদের দল", "আমাদের মিশন"],
                header: "“যে কেউ আল্লাহর জন্য একটি মসজিদ তৈরি করে, আল্লাহ তার জন্য জান্নাতে একই রকম একটি ঘর তৈরি করবেন।”",
                source: "সূত্র: সহীহ আল-বুখারী ৪৫০, সহীহ মুসলিম ৫৩৩",
                donate: "দান করুন",
                follow: "আমাদের অনুসরণ করুন",
                bismillah: "বিসমিল্লাহির রাহমানির রাহিম",
                language: "ভাষা",
                about: "আমাদের সম্পর্কে",
                langDropdown:["ইংরেজি","বাংলা","আরবি","জাপানিজ"],
                footer: {
                    title: "মসজিদুল-আকসা",
                    location: "ফিলিস্তিন",
                    Quick:"দ্রুত লিঙ্ক",
                    quickLinks: ["ইতিহাস", "কার্যক্রম", "দান", "নামাজের সময়", "যোগাযোগ"],
                    contactTitle: "যোগাযোগের তথ্য",
                    contact: {
                        address: "ফিলিস্তিন",
                        email: "masjidulaqsa@gmail.com",
                        phone: "+49 176 5779 1221",
                        website: "www.Masjidul-Al-Aqsa.com",
                        facebook: "ফেসবুক"
                    }
                },
                historySection: {
                    title: "মসজিদুল-আল-আকসার ইতিহাস",
                    pick: '"একটি বিনীত স্বপ্ন থেকে একটি মহৎ দৃষ্টিভঙ্গি: আল্লাহর কৃপায় একসঙ্গে বৃদ্ধি পাচ্ছে"',
                    details: [
                        "আল-আকসা মসজিদ, জেরুজালেমের একটি মসজিদ, যা প্রাচীন শহরে অবস্থিত এবং মহানবী মুহাম্মদ (সা.) এর ইসরার যাত্রার শেষ বিন্দু। ইসলামিক সূত্র অনুযায়ী, কুরআন (১৭:১) ইঙ্গিত করে যে মুহাম্মদ এক রাতে অলৌকিকভাবে মক্কা থেকে জেরুজালেমে স্থানান্তরিত হয়েছিলেন...",
                        "আধুনিক সময়ে মসজিদ এবং প্লাজা আরব-ইসরায়েলি সংঘাতে একটি বিশেষ উত্তেজনার পয়েন্ট হয়ে উঠেছে। মসজিদটি মুসলমানদের জন্য গুরুত্বপূর্ণ হওয়া ছাড়াও, এটি ইহুদিদের জন্য জেরুজালেমের মন্দিরের সাইট হিসেবে গুরুত্বপূর্ণ।"
                    ]
                }
            },
            ar: {
                navbar: ["الرئيسية", "التبرعات", "العضوية", "مواقيت الصلاة", "الفعاليات", "تواصل معنا"],
                aboutDropdown: ["التاريخ", "فريقنا", "مهمتنا"],
                header: "“من بنى مسجدًا لله، بنى الله له بيتًا مثله في الجنة.”",
                source: "المصدر: صحيح البخاري ٤٥٠، صحيح مسلم ٥٣٣",
                donate: "تبرع",
                follow: "تابعنا",
                bismillah: "بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ",
                language: "اللغة",
                about: "من نحن",
                langDropdown:["إنجليزي","البنغالية","عربي","اليابانية"],
                footer: {
                    title: "مسجد الأقصى",
                    location: "فلسطين",
                    Quick:"روابط سريعة",
                    quickLinks: ["التاريخ", "الأنشطة", "التبرعات", "مواقيت الصلاة", "تواصل معنا"],
                    contactTitle: "معلومات التواصل",
                    contact: {
                        address: "فلسطين",
                        email: "masjidulaqsa@gmail.com",
                        phone: "+49 176 5779 1221",
                        website: "www.Masjidul-Al-Aqsa.com",
                        facebook: "فيسبوك"
                    }
                },
                historySection: {
                    title: "تاريخ المسجد الأقصى",
                    pick: '"من حلم متواضع إلى رؤية عظيمة: ننمو معًا بفضل الله"',
                    details: [
                        "المسجد الأقصى، مسجد في القدس، يقع في المدينة القديمة وهو نقطة النهاية لرحلة الإسراء للنبي محمد. وفقًا للمصادر الإسلامية، تشير الآية القرآنية (الإسراء: ١) إلى أن محمد نُقل بطريقة معجزة من مكة...",
                        "في العصر الحديث، أصبح المسجد والساحة مصدرًا للتوتر في الصراع العربي الإسرائيلي. إضافةً إلى أهميته بالنسبة للمسلمين، فإن الساحة تحمل أهمية كبيرة لليهود كموقع الهيكل في القدس..."
                    ]
                }
                
            },
            jp:{
                navbar:["家","寄付","メンバーシップ","祈りの時間","イベント","お問い合わせ"],
                aboutDropdown:["歴史","私たちのチーム","私たちの使命"],
                header:"アッラーのためにモスクを建てる者は誰でも、アッラーは彼のために楽園に同じような家を建ててくださいます。",
                source:"出典: Ṣtaḥīḥ al-Bukhārī 450、Ṣtaḥīḥ イスラム教徒 533",
                donate: "寄付する",
                follow: "私たちに従ってください",
                bismillah:"بِسْمِ اللَّهِ الرَّحْمَـٰنِ الرَّحِيمِ",
                language: "言語",
                about: "私たちについて",
                langDropdown:["英語","バングラ","アラビア語","日本語"],
                footer: {
                    title: "マスジド・アル＝アクサ",
                    location: "パレスチナ",
                    Quick:"クイックリンク",
                    quickLinks: ["歴史", "活動", "寄付", "祈りの時間", "お問い合わせ"],
                    contactTitle: "連絡先情報",
                    contact: {
                        address: "パレスチナ",
                        email: "info@darulihsan-berlin.de",
                        phone: " +49 176 5779 1221",
                        website: "www.Masjidul-Al-Aqsa.com",
                        facebook: "フェイスブック"
                    }
                },
                historySection: {
                    title: "マスジド・アル＝アクサの歴史",
                    pick: '"謙虚な夢から壮大なビジョンへ：アッラーの恵みによる成長"',
                    details: [
                        "アル＝アクサモスクは、エルサレムの旧市街にあるモスクで、預言者ムハンマドのイスラーの旅の終着点です。イスラム教の資料によると、クルアーン（17:1）は、ムハンマドが一夜のうちに奇跡的にメッカ（神聖なる礼拝の場）からエルサレム（より遠い礼拝の場）へと運ばれたことを示しています。そこで彼はアブラハム、モーセ、イエス、その他の神の使者たちとともに祈りを捧げました。その夜、彼はドーム・オブ・ザ・ロックから天に昇り、神と出会いました。",
                        "現代では、このモスクとその広場はアラブ・イスラエル紛争における特別な緊張の焦点となっています。モスクはムスリムにとって重要であるだけでなく、ユダヤ人にとってはエルサレム神殿の遺跡として重要です。この広場はユダヤ人によって『神殿の丘』と呼ばれています。"
                    ]
                }
            }
        };

        const selectedTranslations = translations[lang];
        document.querySelector(".arabic").innerText = selectedTranslations.bismillah;
        document.querySelector("h1").innerText = selectedTranslations.header;
        document.querySelector(".source").innerText = selectedTranslations.source;
        document.querySelector(".footer-left h3").innerText = selectedTranslations.footer.title;
        document.querySelector(".footer-left p").innerText = selectedTranslations.footer.location;
        document.querySelector(".footer-links h3").innerText = selectedTranslations.footer.Quick;

        const navLinks = document.querySelectorAll(".links > li > a");
        selectedTranslations.navbar.forEach((text, index) => {
            if (navLinks[index]) {
                navLinks[index].innerText = text;
            }
        });

        const aboutDropdownLinks = document.querySelectorAll(".about-content a");
        selectedTranslations.aboutDropdown.forEach((text, index) => {
            if (aboutDropdownLinks[index]) {
                aboutDropdownLinks[index].innerText = text;
            }
        });
        const langDropdownLinks = document.querySelectorAll(".lang-content a");
        selectedTranslations.langDropdown.forEach((text, index) => {
            if (langDropdownLinks[index]) {
                langDropdownLinks[index].innerText = text;
            }
        });
        const quickLinks = document.querySelectorAll(".footer-links ul li a");
        selectedTranslations.footer.quickLinks.forEach((text, index) => {
            if (quickLinks[index]) {
                quickLinks[index].innerText = text;
            }
        });
        document.querySelector(".history h2").innerText = selectedTranslations.historySection.title;
        document.querySelector(".history .pick").innerText = selectedTranslations.historySection.pick;
        const historyDetails = document.querySelector(".history-details");
        historyDetails.innerHTML = "";
        selectedTranslations.historySection.details.forEach(detail => {
            const paragraph = document.createElement("p");
            paragraph.innerHTML = `<span>✔️</span> ${detail}`;
            historyDetails.appendChild(paragraph);
        });
       
        document.querySelector(".donate").innerText = selectedTranslations.donate;
        document.querySelector(".follow").innerText = selectedTranslations.follow;
        document.querySelector(".about-btn").innerHTML=selectedTranslations.about;
        document.querySelector(".lang-btn").innerText = selectedTranslations.language;
        document.querySelector(".footer-right h3").innerText = selectedTranslations.footer.contactTitle;
        document.querySelector(".footer-right .fa-map-marker-alt + span").innerText = selectedTranslations.footer.contact.address;
        document.querySelector(".footer-right .fa-envelope + span").innerText = selectedTranslations.footer.contact.email;
        document.querySelector(".footer-right .fa-phone + span").innerText = selectedTranslations.footer.contact.phone;
        document.querySelector(".footer-right .fa-globe + span").innerText = selectedTranslations.footer.contact.website;
        document.querySelector(".footer-right .fab.fa-facebook + span").innerText = selectedTranslations.footer.contact.facebook;
    }
});


window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { 
        navbar.classList.add('scrolled'); 
    } else {
        navbar.classList.remove('scrolled'); 
    }
});