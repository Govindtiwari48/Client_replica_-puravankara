// ============================================
// GOOGLE SHEETS INTEGRATION CONFIGURATION
// ============================================
// Replace this URL with your Google Apps Script Web App URL
// To get your URL:
// 1. Deploy your Google Apps Script as a Web App
// 2. Copy the Web App URL from the deployment
// 3. Paste it here
const GOOGLE_APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxzwUq5Ih2eO3FsOJp155IhRSScCtikMYDsHJvClcE_1Vs_vjjYdjqZO3ABwabD9V4/exec';

// Test function - Run this in browser console to test Google Sheets connection
// Usage: testGoogleSheetsConnection()
window.testGoogleSheetsConnection = function () {
    const testData = {
        name: 'Test User',
        mobile: '9876543210',
        email: 'test@example.com',
        where_you_find_us: 'Google ads'
    };

    console.log('Testing Google Sheets connection...');
    console.log('URL:', GOOGLE_APPS_SCRIPT_URL);
    console.log('Test data:', testData);

    fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData)
    })
        .then(response => {
            console.log('Response status:', response.status);
            console.log('Response headers:', response.headers);
            return response.json();
        })
        .then(data => {
            console.log('✅ SUCCESS! Response from Google Sheets:', data);
            alert('Test successful! Check your Google Sheet for the test entry.');
        })
        .catch((error) => {
            console.error('❌ ERROR:', error);
            console.log('Trying no-cors mode...');

            fetch(GOOGLE_APPS_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(testData)
            })
                .then(() => {
                    console.log('Request sent (no-cors mode). Check your Google Sheet.');
                    alert('Request sent. Please check your Google Sheet manually.');
                })
                .catch((noCorsError) => {
                    console.error('Both methods failed:', noCorsError);
                    alert('Connection failed. Check console for details.');
                });
        });
};

// ============================================

const __initialURL = window.__initialURL || window.location.href;
const __initialSearchString = window.__initialSearchString !== undefined
    ? window.__initialSearchString
    : window.location.search;
window.__initialSearchString = __initialSearchString;

const __initialHashRaw = window.__initialHashRaw !== undefined
    ? window.__initialHashRaw
    : window.location.hash || '';
window.__initialHashRaw = __initialHashRaw;

let __initialHashBase = __initialHashRaw;
const __initialQuerySegments = [];

if (__initialSearchString && __initialSearchString.length > 1) {
    __initialQuerySegments.push(__initialSearchString.substring(1));
}

if (__initialHashRaw.includes('?')) {
    const hashSplitIdx = __initialHashRaw.indexOf('?');
    __initialHashBase = __initialHashRaw.substring(0, hashSplitIdx);
    const hashQuery = __initialHashRaw.substring(hashSplitIdx + 1);
    if (hashQuery) {
        __initialQuerySegments.push(hashQuery);
    }
}

const __initialUTMQueryString = __initialQuerySegments.length
    ? `?${__initialQuerySegments.join('&')}`
    : '';
const __initialUTMParams = new URLSearchParams(__initialQuerySegments.join('&'));

window.__initialURL = __initialURL;
window.__initialUTMQueryString = __initialUTMQueryString;
window.__initialUTMParams = __initialUTMParams;
window.__initialHashBase = __initialHashBase;

$(document).ready(function () {

    $('[data-toggle="tooltip"]').tooltip();

    // Restrict phone number inputs to only accept numbers
    $(document).on('input', 'input[name="mobile"], input[type="number"][name="mobile"]', function(e) {
        // Remove any non-numeric characters
        let value = $(this).val().replace(/\D/g, '');
        $(this).val(value);
    });

    // Prevent non-numeric characters on keypress
    $(document).on('keypress', 'input[name="mobile"], input[type="number"][name="mobile"]', function(e) {
        // Allow: backspace, delete, tab, escape, enter, decimal point
        if ([46, 8, 9, 27, 13, 110, 190].indexOf(e.keyCode) !== -1 ||
            // Allow: Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
            (e.keyCode === 65 && e.ctrlKey === true) ||
            (e.keyCode === 67 && e.ctrlKey === true) ||
            (e.keyCode === 86 && e.ctrlKey === true) ||
            (e.keyCode === 88 && e.ctrlKey === true) ||
            // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
            return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });

    // Rera Non-Rera 
    // $("body").attr("id", "non-rera");


    // Rera Non-Rera Condition
    // $("body").attr("id", "on-rera"); // Or "non-rera"
    $("body").removeClass('is-loading'); // Remove hiding class AFTER setting the 

    // Header Logo
    // $('#head_logo').append('<img src="assets/images/logo/logo.png" alt="" class="img-fluid d-block mx-auto" width="250" />');
    // $('#modal-logo').append('<img src="assets/images/logo/logo.png" class="img-fluid" width="250" />')

    // Footerlogo and RERA No changes here 
    // $('.foot_logo').append('<img src="assets/images/logo/logo.png" alt="" class="img-fluid d-block mx-auto" width="250" />'); 
    // $('#foot_rera_qr mb').append(`<img src="assets/images/qr-code/P51700047432.png" class="img-fluid m-1 d-inline-block" width="90"> `);

    // $('#Agent_Rera').append('Agent Rera Number : A51900029955'); 
    // $('#Project_Rera').append('Project Rera Number : P51800048658');
    // END Footerlogo here


    // Offset top header
    // Adjust scroll for anchor links
    $('#navbarNav a[href^="#"]').on('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior

        let target = $($(this).attr('href')); // Get the target element
        let offset = 50; // Offset height (e.g., height of fixed header)

        if (target.length) {
            $('html, body').animate(
                {
                    scrollTop: target.offset().top - offset
                },
                500 // Animation duration in ms
            );
        }
    });


    //////whatsapp code////////
    const originalUrlString = window.__initialURL || window.location.href;
    const url = new URL(originalUrlString);
    $(".website_url").val(url.href);

    const getInitialParam = (key) => {
        if (__initialUTMParams && __initialUTMParams.has(key)) {
            const values = __initialUTMParams.getAll(key);
            return values.length ? values[values.length - 1] : __initialUTMParams.get(key);
        }
        return url.searchParams.get(key);
    };

    let utm_source = getInitialParam('utm_source');
    let mainsource = getInitialParam('mainsource');

    // Get params from URL hash if not present
    if ((!utm_source && !mainsource) && url.hash) {
        const hashContent = url.hash.substring(1);
        let queryString = hashContent.includes('?') ? hashContent.split('?')[1] : hashContent;
        const hashParams = new URLSearchParams(queryString);
        if (!utm_source) utm_source = hashParams.get('utm_source');
        if (!mainsource) mainsource = hashParams.get('mainsource');
    }

    const whatsappConfig = window.whatsappConfig || {};
    const projectName = whatsappConfig.projectName || "Krisala x Hiranandani At North Hinjewadi, Pune";
    const visibilityConfig = whatsappConfig.visibility || {};
    const nonReraVisibility = visibilityConfig.nonRera || {};
    const nriNonReraVisibility = visibilityConfig.nriNonRera || {};
    const contactNumberRaw = (whatsappConfig.contactNumber || '').replace(/\D/g, '');
    const contactTelHref = contactNumberRaw ? `tel:+${contactNumberRaw}` : '';
    const formatDisplayContactNumber = (rawNumber, separator = '-') => {
        if (!rawNumber) return '';
        const clean = rawNumber.replace(/\D/g, '');
        if (clean.length <= 10) {
            return `+${clean}`;
        }
        const localLength = Math.min(10, clean.length);
        const localPart = clean.slice(-localLength);
        const countryPart = clean.slice(0, clean.length - localLength);
        return `+${countryPart}${separator}${localPart}`;
    };
    const contactNumberDisplay = contactNumberRaw ? formatDisplayContactNumber(contactNumberRaw) : '';

    const body = document.body;
    const bodyId = body ? body.getAttribute('id') || '' : '';
    const allowedSiteModes = ['on-rera', 'non-rera', 'nri-rera', 'nri-non-rera'];
    const determineSiteMode = () => {
        if (allowedSiteModes.includes(bodyId)) {
            return bodyId;
        }
        if (!body) {
            return '';
        }
        const dataMode = body.getAttribute('data-site-mode');
        if (allowedSiteModes.includes(dataMode)) {
            return dataMode;
        }
        for (const cls of Array.from(body.classList || [])) {
            if (allowedSiteModes.includes(cls)) {
                return cls;
            }
        }
        return '';
    };
    const siteMode = determineSiteMode();
    const parseBoolAttr = (value) => {
        if (value === undefined || value === null) {
            return false;
        }
        const normalized = String(value).trim().toLowerCase();
        return normalized === '1' || normalized === 'true' || normalized === 'yes';
    };
    const bodyDataset = body ? body.dataset || {} : {};
    const nriUsEmailFlag = parseBoolAttr(bodyDataset.nriUsEmail ?? (body ? body.getAttribute('data-nri-us-email') : null));
    const isNriMode = siteMode === 'nri-rera' || siteMode === 'nri-non-rera';
    const shouldShowEmail = isNriMode && nriUsEmailFlag;
    const shouldRequireEmail = shouldShowEmail;
    window.__siteMode = siteMode;
    window.__isNriMode = isNriMode;
    window.__requireEmail = shouldRequireEmail;
    window.__showEmail = shouldShowEmail;

    ensureEmailFieldsExist();

    const toggleBodyClass = (target, className, shouldAdd) => {
        if (!target) return;
        if (shouldAdd) target.classList.add(className);
        else target.classList.remove(className);
    };

    const scheduleTitleEl = document.querySelector('#contact .section-title');
    if (scheduleTitleEl) {
        scheduleTitleEl.textContent = window.__isNriMode ? 'Schedule a Video Call' : 'Schedule a Site Visit';
    }

    const updateOptionalEmailPlaceholders = () => {
        const optionalEmailSelectors = [
            'form[name="modal-form"] input[name="email"]',
            'form[name="modal-form1"] input[name="email"]',
            'form[name="Pre-Register"] input[name="email"]'
        ];
        const optionalEmailInputs = document.querySelectorAll(optionalEmailSelectors.join(', '));
        optionalEmailInputs.forEach((input) => {
            if (!input) return;
            if (!input.dataset.optionalPlaceholderOriginal) {
                input.dataset.optionalPlaceholderOriginal = input.getAttribute('placeholder') || 'Email (Optional)';
            }
            if (window.__showEmail) {
                input.placeholder = 'Email*';
            } else {
                input.placeholder = input.dataset.optionalPlaceholderOriginal;
            }
        });
    };

    updateOptionalEmailPlaceholders();

    (function applyEmailRequirement() {
        const emailInputs = document.querySelectorAll('form[name="schedule-site"] input[name="email"], form[name="Pre-Register-sidemodal"] input[name="email"], form[name="Pre-Register"] input[name="email"]');
        const shouldShow = !!window.__showEmail;
        const isRequired = !!window.__requireEmail;
        emailInputs.forEach((input) => {
            if (!input.dataset.originalPlaceholder) {
                input.dataset.originalPlaceholder = input.getAttribute('placeholder') || '';
            }
            const wrapper = input.closest('.forms-input-fields') || input.closest('.form-group') || input.parentNode;
            if (!shouldShow) {
                input.required = false;
                input.removeAttribute('aria-required');
                input.classList.remove('is-invalid', 'is-valid');
                input.value = '';
                input.disabled = true;
                if (wrapper) {
                    wrapper.classList.add('d-none');
                    wrapper.style.display = 'none';
                }
                const errorSpan = ensureEmailErrorSpan(input);
                if (errorSpan) {
                    errorSpan.style.display = 'none';
                }
                return;
            }
            if (wrapper) {
                wrapper.classList.remove('d-none');
                wrapper.style.display = '';
            }
            input.disabled = false;
            if (isRequired) {
                input.required = true;
                input.setAttribute('aria-required', 'true');
                if (!input.placeholder || /optional/i.test(input.placeholder)) {
                    input.placeholder = 'Email*';
                }
                const errorSpan = ensureEmailErrorSpan(input);
                if (errorSpan) {
                    errorSpan.textContent = 'Email field is required.';
                }
            } else {
                input.required = false;
                input.removeAttribute('aria-required');
                if (Object.prototype.hasOwnProperty.call(input.dataset, 'originalPlaceholder')) {
                    input.placeholder = input.dataset.originalPlaceholder;
                }
                const errorSpan = ensureEmailErrorSpan(input);
                if (errorSpan) {
                    errorSpan.style.display = 'none';
                }
            }
        });
    })();

    (function applyVisibilityControls() {
        if (!body) return;
        if (siteMode === 'non-rera') {
            toggleBodyClass(body, 'nonrera-show-whatsapp', !!nonReraVisibility.whatsapp);
            toggleBodyClass(body, 'nonrera-show-chatbot', !!nonReraVisibility.chatbot);
            toggleBodyClass(body, 'nonrera-show-contact', !!nonReraVisibility.contact);
        } else if (siteMode === 'nri-non-rera') {
            toggleBodyClass(body, 'nrinonrera-show-whatsapp', !!nriNonReraVisibility.whatsapp);
            toggleBodyClass(body, 'nrinonrera-show-chatbot', !!nriNonReraVisibility.chatbot);
            toggleBodyClass(body, 'nrinonrera-show-contact', !!nriNonReraVisibility.contact);
        }
    })();

    // Defer contact number updates to avoid blocking initial render
    if (contactTelHref) {
        const contactDisplayText = contactNumberDisplay || `+${contactNumberRaw}`;
        // Use requestAnimationFrame to defer DOM updates after initial paint
        requestAnimationFrame(() => {
            $('.desktop-summary .btn.on-rera a[href^="tel:"]').attr('href', contactTelHref).text(` ${contactDisplayText}`);
            $('.footer-enquiryBtn .monCall.on-rera[href^="tel:"]').attr('href', contactTelHref);
            $('.monCall.data-id-btn.on-rera[href^="tel:"]').attr('href', contactTelHref);
        });
    }

    // New code whatsapp start/
    const defaultMessageMap = {
        defaultMsg: `Hey There, I would like to explore further details About ${projectName}. Please Share Details.`,
        google: `Hello, I would like to explore further details about ${projectName}.`,
        ppc: `Hi I'm interested in Learning more About ${projectName}. Please Share Details.`,
        bing: `Hi There, I'm interested in Learning more About ${projectName}. Please Share Details.`,
        bingo: `Hello There, I would like to explore further details About ${projectName}. Please Share Details.`,
        wapp: `Hey, I would like to explore further details About ${projectName}. Please Share Details.`,
        wappint: `Hey, I would like to explore further details About ${projectName}. Please Share Details.`,
        weblead: `Kindly share further details About ${projectName}. I would like to know more about this project.`
    };
    const messageMap = Object.assign({}, defaultMessageMap, whatsappConfig.messageMap || {});
    const phoneNumber = (whatsappConfig.phoneNumber || '919986661295').replace(/\D/g, '');

    const sourceKey = (mainsource || utm_source || "").toLowerCase();
    // const whatsappMessage = messageMap[sourceKey] || messageMap["defaultMsg"];
    // const sourceValue = (utm_source || mainsource || "").toLowerCase();
    const sourceValue = (mainsource || utm_source || "").toLowerCase();


    let messageKey = "defaultMsg";
    if (sourceValue.includes("web") && sourceValue.includes("lead")) messageKey = "weblead";
    else if (sourceValue.includes("google")) messageKey = "google";
    else if (sourceValue.includes("ppc")) messageKey = "ppc";
    else if (sourceValue.includes("bingo")) messageKey = "bingo";
    else if (sourceValue.includes("bing")) messageKey = "bing";
    else if (sourceValue.includes("wappint")) messageKey = "wappint";
    else if (sourceValue.includes("wapp")) messageKey = "wapp";
    else if (sourceValue.includes("ctw")) messageKey = "ctw";

    // New code whatsapp end/



    const selectedMessage = messageMap[messageKey];
    const whatsappMessage = (selectedMessage && selectedMessage.trim()) ? selectedMessage : messageMap.defaultMsg;
    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(whatsappMessage)}`;

    // âœ… Set href to .discovery and .discovery_mobile buttons
    $('.discovery, .discovery_mobile').attr('href', whatsappLink);

    function ensureModalWhatsappCta(shouldShow) {
        if (!body) return;
        const modalIds = ['enquire-modal', 'autoPopup'];
        modalIds.forEach((modalId) => {
            const modalElement = document.getElementById(modalId);
            if (!modalElement) {
                return;
            }
            const modalBody = modalElement.querySelector('.modal-body');
            if (!modalBody) {
                return;
            }

            let ctaWrapper = modalBody.querySelector('.modal-whatsapp-cta');
            if (!ctaWrapper) {
                ctaWrapper = document.createElement('div');
                ctaWrapper.className = 'modal-whatsapp-cta text-center mt-3';
                modalBody.appendChild(ctaWrapper);
            }

            ctaWrapper.innerHTML = `
             <h6 class="mt-3 text-center">Or</h6>
                <div class="enquireNowBtn deskwhtsap d-none d-sm-none d-md-block mx-auto p-0">
                    <a href="${whatsappLink}" target="_blank" rel="noopener" class="d-inline-flex align-items-center justify-content-center discovery">
                        <img src="assets/images/gif_icon/whatsappAnim.gif" alt="WhatsApp" class="whatsapp-img me-2" loading="lazy">
                        Connect On WhatsApp
                    </a>
                </div>
                <div class="slide-submit d-block d-sm-block d-md-none">
                    <span class="slide-submit-text">Slide to WhatsApp</span>
                    <button type="button" class="discovery_mobile whatsapp-slide-btn">
                        <img src="assets/images/gif_icon/swipe-arrow.png" alt="" class="img-responsive">
                    </button>
                </div>
            `;

            const linkEl = ctaWrapper.querySelector('a.discovery');
            if (linkEl) {
                linkEl.href = whatsappLink;
            }

            ctaWrapper.classList.toggle('d-none', !shouldShow);
        });
    }

    const shouldShowModalWhatsapp =
        (siteMode === 'non-rera' && !!nonReraVisibility.whatsapp) ||
        (siteMode === 'nri-non-rera' && !!nriNonReraVisibility.whatsapp);

    if (siteMode === 'non-rera' || siteMode === 'nri-non-rera') {
        ensureModalWhatsappCta(shouldShowModalWhatsapp);
    }

    (function updateDesktopSummaryFeatures() {
        const enqModal = document.querySelector('.desktop-summary .enqModal');
        if (!enqModal) {
            return;
        }
        const defaultRow = enqModal.querySelector('.default-feature-row');
        const nriRow = enqModal.querySelector('.nri-feature-row');
        if (!defaultRow && !nriRow) {
            return;
        }

        const isNriMode = siteMode === 'nri-rera' || siteMode === 'nri-non-rera';
        if (isNriMode) {
            if (defaultRow) {
                defaultRow.style.display = 'none';
            }
            if (nriRow) {
                nriRow.style.removeProperty('display');
                const nriLabels = [
                    {
                        text: 'Global Support Desk',
                        alt: 'Global Support Desk',
                        iconSrc: 'assets/images/gif_icon/Instant Call Back.gif'
                    },
                    {
                        text: '360° Virtual Tour',
                        alt: '360° Virtual Tour',
                        iconSrc: 'assets/images/gif_icon/360-view.gif'
                    },
                    {
                        text: 'High ROI Deals',
                        alt: 'High ROI Deals',
                        iconSrc: 'assets/images/gif_icon/ROI.gif'
                    }
                ];
                nriRow.querySelectorAll('.col-4').forEach((col, index) => {
                    const config = nriLabels[index];
                    if (!config) {
                        return;
                    }
                    const labelEl = col.querySelector('p');
                    if (labelEl && labelEl.textContent.trim() !== config.text) {
                        labelEl.textContent = config.text;
                    }
                    const iconEl = col.querySelector('img');
                    if (iconEl) {
                        iconEl.alt = config.alt;
                        if (config.iconSrc) {
                            // Update icon source for NRI modes (360-view and Best Price for ROI)
                            const currentSrc = iconEl.getAttribute('src') || iconEl.src;
                            const currentIconName = currentSrc.split('/').pop();
                            const newIconName = config.iconSrc.split('/').pop();
                            if (currentIconName !== newIconName) {
                                iconEl.src = config.iconSrc;
                            }
                        }
                    }
                });
            }
        } else {
            if (defaultRow) {
                defaultRow.style.removeProperty('display');
            }
            if (nriRow) {
                nriRow.style.display = 'none';
            }
        }
    })();

    // Update mobile form NRI feature icons visibility
    (function updateMobileFormFeatures() {
        const mobileForm = document.querySelector('.mob-form');
        if (!mobileForm) {
            return;
        }
        const nriFeatureIcons = mobileForm.querySelector('.nri-feature-icons-mobile');
        if (!nriFeatureIcons) {
            return;
        }

        const isNriMode = siteMode === 'nri-rera' || siteMode === 'nri-non-rera';
        if (isNriMode) {
            nriFeatureIcons.style.removeProperty('display');
        } else {
            nriFeatureIcons.style.display = 'none';
        }
    })();

    // to hide google whatsApp
    // if(sourceValue.includes("google")){
    //     $('.discovery, .discovery_mobile').remove(''); 
    //     $("#main-popup > div:nth-child(4) > div > div.text-center > span").addClass('d-none'); 
    //     $("#autoPopup > div > div > div > form > div:nth-child(4) > div > span").addClass('d-none');
    //     $("#main-popup > div:nth-child(4) > div > div.text-center > div.slide-submit").addClass('d-none');
    //     $("#autoPopup > div > div > div > form > div:nth-child(4) > div > div.slide-submit").addClass('d-none');
    // }

    // âœ… Slide-to-WhatsApp logic for each button
    $(".slide-submit").each(function () {
        const container = $(this);
        const button = container.find("button.whatsapp-slide-btn");
        const slideText = container.find(".slide-submit-text");

        button.draggable({
            cancel: false,
            containment: "parent",
            axis: "x",
            stop: function (event, ui) {
                const buttonPosition = ui.position.left;
                const containerWidth = container.width();
                const buttonWidth = button.width();

                if (buttonPosition > (containerWidth - buttonWidth) * 0.7) {
                    slideText.text("Launching WhatsApp...");
                    button.draggable('disable').css('cursor', 'default');

                    setTimeout(function () {
                        window.location.href = whatsappLink;
                    }, 500);
                } else {
                    button.animate({ left: 0 }, 200);
                    slideText.text("Slide to WhatsApp");
                }
            }
        }).on("click", function () {
            return false;
        });
    });
    //////whatsapp code end////////


    // Location Advantage stop a href 
    // Adjust scroll for anchor links
    $('#exTab1 > a[href^="#"]').on('click', function (e) {
        e.preventDefault(); // Prevent default anchor behavior

        let target = $($(this).attr('href')); // Get the target element
        let offset = 50; // Offset height (e.g., height of fixed header)

        if (target.length) {
            $('html, body').animate(
                {
                    scrollTop: target.offset().top - offset
                },
                500 // Animation duration in ms
            );
        }
    });

    // Form name submission code
    $(".custom-btn, .data-id-btn").click(function () {
        var myBookId = $(this).data('id');
        $(".form_name").val(myBookId);
    });

    // Toggle more and less content
    $(".moredisclaimerBtn").click(function () {
        if ($(this).html() === 'Read more <i class="fa fa-chevron-down"></i>') {
            $(this).html('Read less <i class="fa fa-chevron-up"></i>');
        }
        else {
            $(this).html('Read more <i class="fa fa-chevron-down"></i>');
        }
        $(".moredisclaimerText[data-hit=more" + $(this).data('target') + "]").slideToggle(500);
    });

    $(".moreBtn").click(function () {
        var button = $(this);
        var target = button.data('target');
        var isReadMore = button.html().includes('Read more');
        var newHtml = isReadMore ? 'Read less <i class="fa fa-chevron-up"></i>' : 'Read more <i class="fa fa-chevron-down"></i>';
        button.html(newHtml);
        $(".moreText[data-hit=more" + target + "]").slideToggle(500);
    });

    $(".moreBtn").each(function () {
        const button = $(this);
        const target = button.data('target');
        const relatedText = $(`.moreText[data-hit="more${target}"]`);
        if (!relatedText.length) {
            button.addClass('d-none');
            return;
        }
        if (!relatedText.text().trim().length) {
            relatedText.remove();
            button.addClass('d-none');
        }
    });

    // Modal content update
    $('#enquire-modal').on('show.bs.modal', function (event) {
        var button = $(event.relatedTarget);
        var recipient = button.data('bs-whatever');
        var modal = $(this);
        modal.find('.modal-title').text(recipient);
        modal.find('input[name="recipient"]').val(recipient);
    });

});

// NEW: find the country code next to a mobile input (from your custom selector),
// and also mirror it into a hidden input named "country_code" inside the same form.
function getCountryCodeForInput(mobileInput) {
    if (!mobileInput) return '';

    // Look nearby for a visible .country-code (your selector UI)
    const wrapper = mobileInput.closest('.phone-input-wrapper') || mobileInput.closest('form');
    let code = '';
    if (wrapper) {
        const codeEl = wrapper.querySelector('.country-code');
        if (codeEl) code = (codeEl.textContent || '').trim();
    }

    // Fallback: if a hidden [name="country_code"] already exists, use it
    const form = mobileInput.form || mobileInput.closest('form');
    if (form) {
        let hidden = form.querySelector('input[name="country_code"]');
        if (!hidden) {
            // create one if not present
            hidden = document.createElement('input');
            hidden.type = 'hidden';
            hidden.name = 'country_code';
            form.appendChild(hidden);
        }
        if (code) hidden.value = code;
        else if (hidden.value) code = hidden.value.trim(); // keep previous if set
    }

    return code;
}

// NEW: normalize and combine dial code + local number safely
function combineDialCodeAndMobile(code, mobile) {
    const c = (code || '').replace(/\s+/g, '');
    let m = (mobile || '').replace(/\s+/g, '');

    if (!m) return m; // nothing to do

    // If user already typed a leading +country code, don't double-prefix
    if (m.startsWith('+')) return m;

    // If code is empty, just return the raw mobile
    if (!c) return m;

    // Ensure code starts with '+'
    const dial = c.startsWith('+') ? c : ('+' + c.replace(/^\+/, ''));

    // Avoid duplicates like +91 91xxxxxxx: strip a leading country digits if already present
    const digitsDial = dial.replace('+', '');
    if (m.startsWith(digitsDial)) return dial + m.slice(digitsDial.length);

    // Common case: return +code + number
    return dial + m;
}

function ensureEmailErrorSpan(input) {
    if (!input) return null;
    const container =
        input.closest('.forms-input-fields') ||
        input.closest('.form-group') ||
        input.parentNode;
    if (!container) return null;
    let span = container.querySelector('.error.email-error');
    if (!span) {
        span = document.createElement('span');
        span.className = 'error email-error';
        span.style.display = 'none';
        container.appendChild(span);
    }
    return span;
}

function ensureEmailFieldsExist() {
    const configs = [
        {
            formName: 'schedule-site',
            wrapperClass: 'col-lg-12 col-sm-12 forms-input-fields p-0 mb-2 auto-email-field',
            inputClass: 'form-control ms-0 me-0',
            afterClosest: '.forms-input-fields',
            iconClass: 'fa-solid fa-envelope'
        },
        {
            formName: 'Pre-Register-sidemodal',
            wrapperClass: 'form-group mb-3 forms-input-fields auto-email-field',
            inputClass: 'form-control',
            afterClosest: '.form-group'
        }
    ];

    configs.forEach((cfg) => {
        const form = document.forms[cfg.formName];
        if (!form) {
            return;
        }
        if (cfg.formName === 'Pre-Register-sidemodal') {
            form.querySelectorAll('.form-group').forEach(group => {
                if (!group.classList.contains('forms-input-fields')) {
                    group.classList.add('forms-input-fields');
                }
            });
        }
        if (form.querySelector('input[name="email"]')) {
            return;
        }
        const mobileInput = form.querySelector('input[name="mobile"]');
        if (!mobileInput) {
            return;
        }
        const wrapper = document.createElement('div');
        wrapper.className = cfg.wrapperClass || 'forms-input-fields auto-email-field';
        if (cfg.iconClass) {
            const icon = document.createElement('i');
            icon.className = cfg.iconClass;
            wrapper.appendChild(icon);
        }
        const input = document.createElement('input');
        input.type = 'email';
        input.name = 'email';
        input.className = cfg.inputClass || 'form-control';
        input.placeholder = 'Email (Optional)';
        const errorSpan = document.createElement('span');
        errorSpan.className = 'error';
        errorSpan.textContent = 'Email field is required';
        wrapper.appendChild(input);
        wrapper.appendChild(errorSpan);

        const referenceWrapper =
            mobileInput.closest(cfg.afterClosest || '.forms-input-fields') || mobileInput.parentNode;
        if (referenceWrapper && referenceWrapper.parentNode) {
            referenceWrapper.parentNode.insertBefore(wrapper, referenceWrapper.nextSibling);
        } else {
            form.appendChild(wrapper);
        }
    });
}


/**
 * Submit form data to Google Sheets via Google Apps Script
 * @param {Object} formData - The form data object containing name, email, mobile
 * @param {HTMLElement} submitButton - The submit button element
 * @param {string} originalButtonText - The original button text to restore
 */
function submitToGoogleSheets(formData, submitButton, originalButtonText) {
    // Prepare data for Google Sheets (send name, mobile, email, where_you_find_us)
    const sheetsData = {
        name: formData.name || '',
        mobile: formData.mobile || '',
        email: formData.email || '',
        where_you_find_us: formData.where_you_find_us || ''
    };

    console.log('Submitting to Google Sheets:', sheetsData);
    console.log('Google Apps Script URL:', GOOGLE_APPS_SCRIPT_URL);

    // First try with CORS mode to see the response
    fetch(GOOGLE_APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(sheetsData)
    })
        .then(response => {
            console.log('Response status:', response.status);
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok');
        })
        .then(data => {
            console.log('Data submitted successfully to Google Sheets:', data);
        })
        .catch((error) => {
            console.warn('CORS request failed, trying no-cors mode:', error);
            // Fallback to no-cors mode if CORS fails
            fetch(GOOGLE_APPS_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(sheetsData)
            })
                .then(() => {
                    console.log('Data submitted to Google Sheets (no-cors mode - response not readable)');
                })
                .catch((noCorsError) => {
                    console.error('Error submitting to Google Sheets (both methods failed):', noCorsError);
                });
        });
}

//form submit//
function submitForm(event, formName) {
    // alert("hii");
    event.preventDefault(); // Prevent default form submission
    console.log("--- submitForm called for:", formName, "---"); // DEBUG

    // --- Get Form and Price ---
    const formElement = document.forms[formName];
    if (!formElement) {
        console.error("CRITICAL: Form element not found for name:", formName); // DEBUG
        return; // Exit if form doesn't exist
    }
    var price = $(".price-sub-text").text().trim();


    // --- URL Handling ---
    var currentUrl = window.location.href;

    // Fix URL if it contains more than one '?'
    var questionMarkIndex = currentUrl.indexOf('?');
    var secondQuestionMarkIndex = currentUrl.indexOf('?', questionMarkIndex + 1);

    if (secondQuestionMarkIndex !== -1) {
        currentUrl = currentUrl.substring(0, secondQuestionMarkIndex) + '&' + currentUrl.substring(secondQuestionMarkIndex + 1);
    }

    // Handle URL fragment (everything after #)
    var hashIndex = currentUrl.indexOf('#');
    if (hashIndex !== -1) {
        var fragment = currentUrl.substring(hashIndex + 1);
        currentUrl = currentUrl.substring(0, hashIndex) + '&' + fragment;
    }



    // --- Clear Previous Errors & Styles ---
    const errorMessages = formElement.querySelectorAll('.error');
    errorMessages.forEach(function (error) {
        error.style.display = 'none';
    });
    const inputs = formElement.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.classList.remove('is-invalid', 'is-valid');
    });


    // --- Validation Logic ---
    let isValid = true; // Start assuming valid
    const formData = new FormData(formElement);

    const nameInput = formElement.querySelector('[name="name"]');
    const mobileInput = formElement.querySelector('[name="mobile"]');
    const emailInput = formElement.querySelector('[name="email"]');
    const whereYouFindUsInput = formElement.querySelector('[name="where_you_find_us"]');
    const countryCode = getCountryCodeForInput(mobileInput);
    const rawMobile = formData.get('mobile') ? formData.get('mobile').trim() : '';
    const fullMobile = combineDialCodeAndMobile(countryCode, rawMobile); // NEW

    const consentCheckbox = formElement.querySelector('.form-check-input[type="checkbox"]');

    // Validate Name
    if (nameInput) { // Check if the input exists first
        console.log("Name input found. Is required?", nameInput.required); // DEBUG
        if (nameInput.required) { // Only validate if it's required
            const nameValue = nameInput.value.trim(); // Trim whitespace!
            // Try multiple selectors to find error span (handles both .forms-input-fields and .form-group structures)
            const nameErrorSpan = nameInput.closest('.forms-input-fields')?.querySelector('.error') ||
                nameInput.closest('.form-group')?.querySelector('.error') ||
                nameInput.parentNode.querySelector('.error');
            console.log(`Name value (raw): "${nameInput.value}" | (trimmed): "${nameValue}"`); // DEBUG

            if (nameValue === '') {
                console.log("Validation Failed: Name is empty or spaces."); // DEBUG
                isValid = false;
                if (nameErrorSpan) {
                    nameErrorSpan.textContent = 'Name field is required.';
                    // Use block display for form-group errors, inline for forms-input-fields
                    const isFormGroup = nameInput.closest('.form-group');
                    nameErrorSpan.style.display = isFormGroup ? 'block' : 'inline';
                } else { console.warn("Name error span not found!"); } // DEBUG
                nameInput.classList.add('is-invalid');
            } else {
                nameInput.classList.add('is-valid');
                // Clear error message when valid
                if (nameErrorSpan) {
                    nameErrorSpan.style.display = 'none';
                }
            }
        }
    } else { console.log("Name input not found in form:", formName); } // DEBUG

    // Validate Mobile
    if (mobileInput) { // Check if the input exists
        console.log("Mobile input found. Is required?", mobileInput.required); // DEBUG
        if (mobileInput.required) { // Only validate if it's required
            const mobileValue = mobileInput.value.trim(); // Trim whitespace!
            // Try multiple selectors to find error span (handles both .forms-input-fields and .form-group structures)
            const mobileErrorSpan = mobileInput.closest('.forms-input-fields')?.querySelector('.error') ||
                mobileInput.closest('.form-group')?.querySelector('.error') ||
                mobileInput.parentNode.querySelector('.error');
            console.log(`Mobile value (raw): "${mobileInput.value}" | (trimmed): "${mobileValue}"`); // DEBUG

            // Remove all non-digit characters to check length
            const digitsOnly = mobileValue.replace(/\D/g, '');

            if (mobileValue === '') {
                console.log("Validation Failed: Mobile is empty or spaces."); // DEBUG
                isValid = false;
                if (mobileErrorSpan) {
                    mobileErrorSpan.textContent = 'Mobile field is required.';
                    // Use block display for form-group errors, inline for forms-input-fields
                    const isFormGroup = mobileInput.closest('.form-group');
                    mobileErrorSpan.style.display = isFormGroup ? 'block' : 'inline';
                } else { console.warn("Mobile error span not found!"); } // DEBUG
                mobileInput.classList.add('is-invalid');
            }
            else if (digitsOnly.length !== 10) {
                console.log("Validation Failed: Mobile number must be exactly 10 digits."); // DEBUG
                isValid = false;
                if (mobileErrorSpan) {
                    mobileErrorSpan.textContent = 'Phone number must be exactly 10 digits.';
                    // Use block display for form-group errors, inline for forms-input-fields
                    const isFormGroup = mobileInput.closest('.form-group');
                    mobileErrorSpan.style.display = isFormGroup ? 'block' : 'inline';
                } else { console.warn("Mobile error span not found!"); } // DEBUG
                mobileInput.classList.add('is-invalid');
            }
            else {
                mobileInput.classList.add('is-valid');
                // Clear error message when valid
                if (mobileErrorSpan) {
                    mobileErrorSpan.style.display = 'none';
                }
            }
        }
    } else { console.log("Mobile input not found in form:", formName); } // DEBUG

    // Validate Email when required (NRI modes)
    if (emailInput) {
        const showEmail = !!window.__showEmail;
        const emailValue = emailInput.value.trim();
        const emailErrorSpan = ensureEmailErrorSpan(emailInput);
        if (emailErrorSpan) {
            emailErrorSpan.style.display = 'none';
        }
        if (!showEmail) {
            emailInput.classList.remove('is-invalid', 'is-valid');
        } else {
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const isEmailRequired = !!window.__requireEmail;
            emailInput.required = isEmailRequired;
            if (isEmailRequired) {
                if (!emailValue) {
                    isValid = false;
                    if (emailErrorSpan) {
                        emailErrorSpan.textContent = 'Email field is required.';
                        emailErrorSpan.style.display = 'inline';
                    }
                    emailInput.classList.add('is-invalid');
                } else if (!emailPattern.test(emailValue)) {
                    isValid = false;
                    if (emailErrorSpan) {
                        emailErrorSpan.textContent = 'Please enter a valid email address (e.g., name@example.com).';
                        emailErrorSpan.style.display = 'inline';
                    }
                    emailInput.classList.add('is-invalid');
                    // Also set HTML5 validation message
                    emailInput.setCustomValidity('Please enter a valid email address.');
                } else {
                    emailInput.classList.add('is-valid');
                    emailInput.setCustomValidity(''); // Clear any custom validity
                }
            } else if (emailValue && !emailPattern.test(emailValue)) {
                isValid = false;
                if (emailErrorSpan) {
                    emailErrorSpan.textContent = 'Please enter a valid email address (e.g., name@example.com).';
                    emailErrorSpan.style.display = 'inline';
                }
                emailInput.classList.add('is-invalid');
                // Also set HTML5 validation message
                emailInput.setCustomValidity('Please enter a valid email address.');
            } else if (emailValue) {
                emailInput.classList.add('is-valid');
                emailInput.setCustomValidity(''); // Clear any custom validity
            }
        }
    }

    // Validate "Where you find us" dropdown
    if (whereYouFindUsInput) {
        const whereYouFindUsValue = whereYouFindUsInput.value.trim();
        const whereYouFindUsErrorSpan = whereYouFindUsInput.closest('.forms-input-fields')?.querySelector('.error') ||
            whereYouFindUsInput.closest('.form-group')?.querySelector('.error') ||
            whereYouFindUsInput.parentNode.querySelector('.error');

        if (whereYouFindUsInput.required) {
            if (!whereYouFindUsValue) {
                isValid = false;
                if (whereYouFindUsErrorSpan) {
                    whereYouFindUsErrorSpan.textContent = 'Please select where you found us.';
                    const isFormGroup = whereYouFindUsInput.closest('.form-group');
                    whereYouFindUsErrorSpan.style.display = isFormGroup ? 'block' : 'inline';
                }
                whereYouFindUsInput.classList.add('is-invalid');
            } else {
                whereYouFindUsInput.classList.add('is-valid');
                if (whereYouFindUsErrorSpan) {
                    whereYouFindUsErrorSpan.style.display = 'none';
                }
            }
        }
    }

    // --- Stop Submission If Invalid ---
    console.log("Final validation check. Is form valid?", isValid); // DEBUG
    if (!isValid) {
        const firstInvalid = formElement.querySelector('.is-invalid');
        if (firstInvalid) {
            firstInvalid.focus();
        }
        console.log("STOPPING SUBMISSION due to validation errors."); // DEBUG
        return; // Exit the function
    }

    // --- Prepare Data for Submission (If Valid) ---
    console.log("Validation passed. Preparing data for AJAX..."); // DEBUG
    var formnameValue = formData.get('form_name');

    // Extract only the 10-digit phone number (remove country code for Google Sheets)
    const rawMobileValue = formData.get('mobile') ? formData.get('mobile').trim() : '';
    const digitsOnlyMobile = rawMobileValue.replace(/\D/g, '');
    // Take only the last 10 digits (in case country code was included)
    const tenDigitMobile = digitsOnlyMobile.slice(-10);

    var form_data = {
        name: formData.get('name') ? formData.get('name').trim() : '',
        email: formData.get('email') ? formData.get('email').trim() : '',
        mobile: tenDigitMobile, // Send only 10-digit number to Google Sheets
        mobile_full: fullMobile, // Keep full number with country code for other uses
        where_you_find_us: formData.get('where_you_find_us') ? formData.get('where_you_find_us').trim() : '',
        form_name: formnameValue,
        website_url: formData.get('website_url') ? formData.get('website_url') : window.location.origin,
        price: price,
        currentUrl: currentUrl
    };

    // --- Disable Submit Button ---
    const submitButton = event.target.closest('button');
    let originalButtonText = '';
    if (submitButton) {
        const span = submitButton.querySelector('span');
        if (span) {
            originalButtonText = span.textContent;
            span.textContent = 'Submitting...';
        } else {
            originalButtonText = submitButton.textContent;
            submitButton.textContent = 'Submitting...';
        }
        submitButton.disabled = true;
    } else {
        console.warn("Submit button not found for disabling!");
    }

    // --- Submit to Google Sheets (if URL is configured) ---
    if (GOOGLE_APPS_SCRIPT_URL && GOOGLE_APPS_SCRIPT_URL.trim() !== '') {
        submitToGoogleSheets(form_data, submitButton, originalButtonText);
    } else {
        console.warn('Google Apps Script URL not configured. Skipping Google Sheets submission.');
    }

    //----datalayer code
    const dialCodeDiv = formElement.querySelector('.iti__selected-dial-code');
    const dialCode = dialCodeDiv ? dialCodeDiv.textContent : ''; // e.g., "+91"

    const nationalNumber = mobileInput.value.trim(); // e.g., "9898989898"

    // 3. Manually combine them
    // const manuallyCombinedNumber = dialCode + nationalNumber; // e.g., "+919898989898"
    const manuallyCombinedNumberLayer = dialCode + nationalNumber;
    const manuallyCombinedNumber = (dialCode + nationalNumber).replace('+', '%2B');
    //--end datalayer code

    // --- Form Submission (Works without PHP backend for static hosting) ---
    console.log("Processing form submission with data:", form_data); // DEBUG

    // Simulate brief processing delay
    setTimeout(function () {
        // Reset form
        formElement.reset();
        inputs.forEach(input => {
            input.classList.remove('is-invalid', 'is-valid');
        });
        errorMessages.forEach(error => error.style.display = 'none');

        // Close modal if open
        if (formName === 'modal-form' || formName === 'main-popup' || formName === 'modal-form1') {
            const modalElement = document.getElementById('enquire-modal') || document.getElementById('autoPopup');
            if (modalElement) {
                try {
                    const modalInstance = bootstrap.Modal.getInstance(modalElement);
                    if (modalInstance) { modalInstance.hide(); }
                    else { $(modalElement).modal('hide'); }
                } catch (e) {
                    $(modalElement).modal('hide');
                }
            }
        }

        // Build a unique submission id
        const submissionId = Date.now() + '-' + Math.random().toString(36).slice(2, 8);

        // Payload for GTM
        const payload = {
            event: 'conversion_lead',
            submission_id: submissionId,
            user_data: {
                email: form_data.email || '',
                phone_number: manuallyCombinedNumberLayer || '',
                first_name: form_data.name || ''
            },
            form_name: formnameValue || '',
            source_url: form_data.currentUrl || ''
        };

        // Push into a queue so multiple submits are preserved
        try {
            const KEY = 'conversion_lead_queue';
            const q = JSON.parse(localStorage.getItem(KEY) || '[]');
            q.push(payload);
            localStorage.setItem(KEY, JSON.stringify(q));
            console.log('Queued payload:', payload);
        } catch (e) {
            console.error('Queue save failed:', e);
        }

        // Normalize form name for video
        const normalizedFormName = (formnameValue === 'request-yt-videot') ? 'request-yt-video' : formnameValue;

        // Check if it's a video-related form name
        const isVideoForm = normalizedFormName === 'request-yt-video' ||
            normalizedFormName === 'sample-flat' ||
            /^carousel-video-\d+$/i.test(normalizedFormName) ||
            normalizedFormName === 'project-video-card-mobile' ||
            normalizedFormName === 'project-video-card-desktop';

        const dest = (normalizedFormName === 'request-brochure-about')
            ? 'thank-you.html?formName=request-brochure-about'
            : (isVideoForm)
                ? 'thank-you.html?formName=request-yt-video'
                : (normalizedFormName === 'brochure-nav-desktop')
                    ? 'thank-you.html?formName=brochure-nav-desktop'
                    : (normalizedFormName === 'mb-brochure-footer')
                        ? 'thank-you.html?formName=mb-brochure-footer'
                        : 'thank-you.html';

        // Re-enable button before redirect
        if (submitButton) {
            submitButton.disabled = false;
            const span = submitButton.querySelector('span');
            if (span) {
                span.textContent = originalButtonText;
            } else {
                submitButton.textContent = originalButtonText;
            }
        }

        // Send lead data via WhatsApp before redirecting
        // const whatsappPhone = (window.whatsappConfig && window.whatsappConfig.phoneNumber) || '919986661295';
        // const projectName = (window.whatsappConfig && window.whatsappConfig.projectName) || 'Puravankara Lokhandwala';

        // Build WhatsApp message with professional greeting
        // const userName = form_data.name || 'there';
        // const leadMessage = `Hi ${userName}, I would like to know more about ${projectName}. Please share details.`;

        // const encodedMessage = encodeURIComponent(leadMessage);
        // const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${encodedMessage}`;

        // Open WhatsApp in new tab
        // window.open(whatsappUrl, '_blank');

        // Redirect to thank you page after a brief delay
        setTimeout(function () {
            window.location.href = dest;
        }, 500);
    }, 800);
}


//#sitelink code (to prepend #sectionID)
(function () {
    const currentUrl = new URL(window.location.href);
    const preservedUTMQuery = window.__initialUTMQueryString || '';

    document.querySelectorAll('#navbarNav a.nav-link[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            const anchor = this.getAttribute("href").split("?")[0];
            const newUrl = `${currentUrl.origin}${currentUrl.pathname}${preservedUTMQuery}${anchor}`;

            history.pushState(null, '', newUrl); // Update URL without reload
            const target = document.querySelector(anchor);
            if (target) target.scrollIntoView({ behavior: "smooth" });
        });
    });
})();


//////////chatbot///////////// 
$(document).ready(function () {
    try {
        let mainsource = null;
        console.log("Chatbot script started. Checking URL...");

        const urlParams = new URLSearchParams(window.__initialUTMParams ? window.__initialUTMParams.toString() : '');

        if (urlParams.has('mainsource')) {
            mainsource = urlParams.get('mainsource');
            console.log("Found 'mainsource' parameter with value:", mainsource);
        } else {
            console.log("'mainsource' parameter not found in the URL.");
            $('.chat-pop-msg').css({ "display": "block" });
            $('.chatbot__button').addClass('chatbot--is-visible');
        }

        if (mainsource) {
            const lowerCaseSource = mainsource.toLowerCase();

            //show to all UTM
            $('.chat-pop-msg').css({ "display": "block" });
            $('.chatbot__button').addClass('chatbot--is-visible');

            // show to only "bing,google,ect.." UTM
            //show to only "bing,google,ect.." UTM
            // if(lowerCaseSource.includes("bing")){
            //     $('.chat-pop-msg').css({ "display": "block" });
            //     $('.chatbot__button').addClass('chatbot--is-visible');

            // } else {
            //     $('.chat-pop-msg').css({ "display": "none" });
            //     $('.chatbot__button').removeClass('chatbot--is-visible');
            // }


            //Hide to only "PPC" UTM
            // if(lowerCaseSource.includes("google")){
            //     $('.chat-pop-msg').css({ "display": "none" });
            //     $('.chatbot__button').removeClass('chatbot--is-visible');

            // } else {
            //     $('.chat-pop-msg').css({ "display": "block" });
            //     $('.chatbot__button').addClass('chatbot--is-visible');
            // }


        }
    } catch (e) {
        console.error("An error occurred in the chatbot visibility script:", e);
    }

    // --- Original chatbot click handlers ---
    $('.chatbot__button, .chatbot__button1').on('click', function () {
        // $(this).removeClass('chatbot--is-visible').hide();
        $('.chatbot').css({ "display": "block" });
    });

    $('.chatbot .chatbot__header .fa-close').on('click', function () {
        $('.chatbot').css({ "display": "none" });
        $('.chatbot__button').addClass('chatbot--is-visible');
        startPopupInterval(); // Restart popup when chatbot closes
    });

    // --- Chat popup logic ---
    let popupInterval = null;

    function showPopup() {
        $('.chat-pop-msg').css('display', 'block');
    }

    function startPopupInterval() {
        if (!popupInterval) {
            popupInterval = setInterval(showPopup, 3000);
        }
    }

    function stopPopupInterval() {
        if (popupInterval) {
            clearInterval(popupInterval);
            popupInterval = null;
        }
    }

    // Start popup interval on load
    // startPopupInterval();

    $('#chatbox-close').on('click', function () {
        $('.chat-pop-msg').css('display', 'none');
        stopPopupInterval();
    });

    $('.chatbot__button1').on('click', function () {
        $('.chat-pop-msg').css('display', 'none');
        stopPopupInterval();
    });

    // ============================================
    // BLACK FRIDAY POPUP FUNCTIONALITY - COMMENTED OUT
    // ============================================
    // TO RE-ENABLE: 
    // 1. Uncomment the code below (remove /* and */)
    // 2. Add your promotional image to: assets/images/popup/black-friday-popup.jpg
    // 3. The popup will automatically show on page load and after enquiry forms
    // ============================================

    /*
    let blackFridayPopupElement = null;
    let blackFridayPopupTimeout = null;

    function initBlackFridayPopup() {
        blackFridayPopupElement = document.getElementById('blackFridayPopup');
        if (!blackFridayPopupElement) {
            console.warn('Black Friday popup element not found');
            return false;
        }
        return true;
    }

    function showBlackFridayPopup() {
        // Initialize popup element if not done already
        if (!blackFridayPopupElement && !initBlackFridayPopup()) {
            return false;
        }

        // Check if popup is already showing
        if (blackFridayPopupElement && blackFridayPopupElement.classList.contains('show')) {
            console.log('Black Friday popup already showing');
            return false;
        }

        // Check if any modal is currently open
        const openModals = document.querySelectorAll('.modal.show, .modal[style*="display: block"]');
        if (openModals.length > 0) {
            console.log('Modal is still open, delaying popup');
            // Clear any existing timeout
            if (blackFridayPopupTimeout) {
                clearTimeout(blackFridayPopupTimeout);
            }
            // Retry after modal closes
            blackFridayPopupTimeout = setTimeout(showBlackFridayPopup, 500);
            return false;
        }

        try {
            // Add show class and display the popup
            blackFridayPopupElement.classList.add('show');
            blackFridayPopupElement.style.display = 'flex';
            
            // Prevent body scroll when popup is open
            document.body.style.overflow = 'hidden';
            
            // Auto-hide after 15 seconds if user doesn't interact
            setTimeout(function() {
                if (blackFridayPopupElement && blackFridayPopupElement.classList.contains('show')) {
                    hideBlackFridayPopup();
                }
            }, 15000);
            
            console.log('Black Friday popup shown successfully');
            return true;
        } catch(e) {
            console.error('Error showing Black Friday popup:', e);
            return false;
        }
    }

    function hideBlackFridayPopup() {
        if (!blackFridayPopupElement) {
            return;
        }

        try {
            // Remove show class and hide the popup
            blackFridayPopupElement.classList.remove('show');
            setTimeout(() => {
                if (blackFridayPopupElement) {
                    blackFridayPopupElement.style.display = 'none';
                }
            }, 300); // Wait for animation to complete
            
            // Restore body scroll
            document.body.style.overflow = '';
            
            // Clear any pending timeouts
            if (blackFridayPopupTimeout) {
                clearTimeout(blackFridayPopupTimeout);
                blackFridayPopupTimeout = null;
            }
            
            console.log('Black Friday popup hidden');
        } catch(e) {
            console.error('Error hiding Black Friday popup:', e);
        }
    }

    // Initialize popup on DOM ready
    initBlackFridayPopup();

    // Close button functionality - using both jQuery and vanilla JS for compatibility
    $(document).on('click', '#blackFridayClose', function(e) {
        e.preventDefault();
        e.stopPropagation();
        hideBlackFridayPopup();
    });

    // Close on overlay click
    $(document).on('click', '.black-friday-overlay', function(e) {
        if (e.target === e.currentTarget) {
            hideBlackFridayPopup();
        }
    });

    // Close on escape key
    $(document).on('keydown', function(e) {
        if (e.key === 'Escape' && blackFridayPopupElement && blackFridayPopupElement.classList.contains('show')) {
            hideBlackFridayPopup();
        }
    });

    // Show popup ONLY AFTER enquiry modal is closed (not while it's open)
    $('#enquire-modal, #autoPopup').on('hidden.bs.modal', function () {
        console.log('Modal closed, scheduling Black Friday popup');
        // Show Black Friday popup after enquiry modal is completely closed
        setTimeout(function() {
            showBlackFridayPopup();
        }, 800); // Delay to ensure modal is fully closed
    });
    
    // Also listen for Bootstrap 5 modal events (in case jQuery events don't fire)
    const enquireModal = document.getElementById('enquire-modal');
    const autoPopup = document.getElementById('autoPopup');
    
    if (enquireModal) {
        enquireModal.addEventListener('hidden.bs.modal', function () {
            setTimeout(function() {
                showBlackFridayPopup();
            }, 800);
        });
    }
    
    if (autoPopup) {
        autoPopup.addEventListener('hidden.bs.modal', function () {
            setTimeout(function() {
                showBlackFridayPopup();
            }, 800);
        });
    }

    // Show popup on page load after a delay (like other popups)
    // This ensures it shows on every page refresh
    setTimeout(function() {
        // Only show if no modals are currently open
        const openModals = document.querySelectorAll('.modal.show, .modal[style*="display: block"]');
        if (openModals.length === 0) {
            console.log('Page loaded: Showing Black Friday popup');
            showBlackFridayPopup();
        } else {
            // If modal is open, wait for it to close
            console.log('Modal is open on page load, will show after modal closes');
        }
    }, 2000); // Show after 2 seconds on page load

    // Make functions available globally for testing
    window.showBlackFridayPopup = showBlackFridayPopup;
    window.hideBlackFridayPopup = hideBlackFridayPopup;
    */
});
// $("body").attr("id", "on-rera");