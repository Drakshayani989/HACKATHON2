const hamburger = document.getElementById('hamburgerBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        const eventCardsContainer = document.getElementById("eventCards");
        const loadMoreEventsBtn = document.getElementById("loadMoreEventsBtn");
        const viewAllInstitutesBtn = document.getElementById("viewAllInstitutesBtn");

        // Filter elements
        const searchEventsInput = document.getElementById('searchEventsInput');
        const categoryFilter = document.getElementById('categoryFilter');
        const locationFilter = document.getElementById('locationFilter');
        const dateFilter = document.getElementById('dateFilter');
        const paymentForm = document.getElementById('paymentForm');

        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Event data - loaded from localStorage or default if not found
        let allEvents = [];
        try {
            const storedEvents = localStorage.getItem('learnXEvents');
            if (storedEvents) {
                allEvents = JSON.parse(storedEvents);
            } else {
                // Default events if nothing in localStorage
                allEvents = [
                    {
                        id: 'event1',
                        title: "AI for Beginners",
                        date: "2025-08-01T10:00:00",
                        description: "This webinar will introduce you to the fundamental concepts of Artificial Intelligence. Our expert instructor will guide you through machine learning basics, neural networks, and real-world AI applications. Perfect for beginners with no prior experience.",
                        type: "Webinar",
                        price: "Free",
                        image: "https://placehold.co/800x400/AD90F8/white?text=AI+Webinar",
                        organizerLogo: "https://placehold.co/40x40/90B7F8/white?text=TI",
                        organizer: "Tech Education Institute",
                        organizerDesc: "Specializing in technology education since 2010",
                        attendees: 45,
                        totalSeats: 100,
                        location: "Online (Zoom)",
                        instructor: "Dr. Sarah Johnson",
                        learnings: [
                            "Understand basic AI concepts and terminology",
                            "Explore real-world AI applications",
                            "Introduction to machine learning algorithms",
                            "Overview of neural networks",
                            "Getting started with AI projects"
                        ]
                    },
                    {
                        id: 'event2',
                        title: "Digital Marketing Masterclass",
                        date: "2025-08-05T14:00:00",
                        description: "Dive deep into advanced techniques for digital marketing professionals, covering SEO, SEM, social media strategies, and content marketing.",
                        type: "Seminar",
                        price: "$49",
                        image: "https://placehold.co/800x400/D6A3A3/white?text=Digital+Marketing",
                        organizerLogo: "https://placehold.co/40x40/D6A3A3/white?text=MA",
                        organizer: "Marketing Academy",
                        organizerDesc: "Leading experts in digital marketing training.",
                        attendees: 28,
                        totalSeats: 50,
                        location: "Online (Google Meet)",
                        instructor: "Mr. John Smith",
                        learnings: [
                            "Advanced SEO and SEM strategies",
                            "Effective social media campaigns",
                            "Content marketing for lead generation",
                            "Analytics and reporting"
                        ]
                    },
                    {
                        id: 'event3',
                        title: "Data Science Bootcamp",
                        date: "2025-08-10T09:00:00",
                        description: "An 8-week intensive course covering Python programming, machine learning algorithms, data visualization, and big data concepts.",
                        type: "Course",
                        price: "$199",
                        image: "https://placehold.co/800x400/F0B18A/white?text=Data+Science",
                        organizerLogo: "https://placehold.co/40x40/F0B18A/white?text=DSI",
                        organizer: "Data Science Institute",
                        organizerDesc: "Your gateway to a career in data science.",
                        attendees: 62,
                        totalSeats: 75,
                        location: "Hybrid (Online & On-site)",
                        instructor: "Dr. Emily White",
                        learnings: [
                            "Python for data analysis",
                            "Machine learning models (regression, classification)",
                            "Data visualization with Matplotlib and Seaborn",
                            "Introduction to big data tools"
                        ]
                    },
                    {
                        id: 'event4',
                        title: "Web Development Fundamentals",
                        date: "2025-07-15T10:00:00", // Expired event - will not be displayed
                        description: "Learn the basics of HTML, CSS, and JavaScript to build your first website.",
                        type: "Workshop",
                        price: "Free",
                        image: "https://placehold.co/800x400/A8D8AD/white?text=Web+Dev",
                        organizerLogo: "https://placehold.co/40x40/A8D8AD/white?text=WC",
                        organizer: "Web Creators Hub",
                        organizerDesc: "Building the next generation of web developers.",
                        attendees: 120,
                        totalSeats: 150,
                        location: "Online (Zoom)",
                        instructor: "Ms. Priya Sharma",
                        learnings: [
                            "HTML structure and semantics",
                            "CSS styling and layout",
                            "JavaScript for interactivity",
                            "Basic responsive design"
                        ]
                    },
                    {
                        id: 'event5',
                        title: "Graphic Design Principles",
                        date: "2025-07-20T16:00:00", // Current date/time is 8:24 AM IST, so this event starts today.
                        description: "Explore the core principles of graphic design, including typography, color theory, and composition.",
                        type: "Webinar",
                        price: "$15",
                        image: "https://placehold.co/800x400/E89E9E/white?text=Graphic+Design",
                        organizerLogo: "https://placehold.co/40x40/E89E9E/white?text=DA",
                        organizer: "Creative Arts Institute",
                        organizerDesc: "Fostering creativity through design education.",
                        attendees: 30,
                        totalSeats: 60,
                        location: "Online (Webex)",
                        instructor: "Mr. David Lee",
                        learnings: [
                            "Understanding design elements and principles",
                            "Color theory and application",
                            "Effective typography",
                            "Layout and composition techniques"
                        ]
                    },
                    {
                        id: 'event6',
                        title: "Introduction to Cloud Computing",
                        date: "2025-08-15T11:00:00",
                        description: "Get a foundational understanding of cloud computing concepts, services, and popular providers like AWS, Azure, and Google Cloud.",
                        type: "Seminar",
                        price: "Free",
                        image: "https://placehold.co/800x400/C2B2D8/white?text=Cloud+Computing",
                        organizerLogo: "https://placehold.co/40x40/C2B2D8/white?text=CCI",
                        organizer: "Cloud Computing Institute",
                        organizerDesc: "Your partner in cloud technology education.",
                        attendees: 80,
                        totalSeats: 120,
                        location: "Online (Microsoft Teams)",
                        instructor: "Dr. Alex Chen",
                        learnings: [
                            "What is cloud computing?",
                            "Types of cloud services (IaaS, PaaS, SaaS)",
                            "Introduction to AWS, Azure, GCP",
                            "Benefits and challenges of cloud adoption"
                        ]
                    }
                ];
                localStorage.setItem('learnXEvents', JSON.stringify(allEvents)); // Save default to localStorage
            }
        } catch (e) {
            console.error("Error accessing localStorage:", e);
            // Fallback to default events if localStorage is not accessible
            allEvents = [
                // ... (default events as above)
            ];
        }


        let eventsToShow = 3; // Number of events to show initially
        let currentFilteredEvents = []; // To store events after applying filters

        /**
         * Filters events based on search query, category, location, and date.
         * Then renders them to the page.
         */
        function filterAndRenderEvents() {
            const searchTerm = searchEventsInput.value.toLowerCase();
            const selectedCategory = categoryFilter.value;
            const selectedLocation = locationFilter.value;
            const selectedDate = dateFilter.value; // YYYY-MM-DD format

            const now = new Date();

            currentFilteredEvents = allEvents.filter(event => {
                const eventDate = new Date(event.date);
                const eventDateString = eventDate.toISOString().split('T')[0]; // Get YYYY-MM-DD

                // 1. Auto-expiry: Only show future events
                if (eventDate <= now) {
                    return false;
                }

                // 2. Search Term
                const matchesSearch = !searchTerm ||
                                      event.title.toLowerCase().includes(searchTerm) ||
                                      event.description.toLowerCase().includes(searchTerm) ||
                                      event.organizer.toLowerCase().includes(searchTerm) ||
                                      event.type.toLowerCase().includes(searchTerm) ||
                                      event.location.toLowerCase().includes(searchTerm);

                // 3. Category Filter
                const matchesCategory = !selectedCategory || event.type === selectedCategory;

                // 4. Location Filter
                const matchesLocation = !selectedLocation || event.location === selectedLocation;

                // 5. Date Filter
                const matchesDate = !selectedDate || eventDateString === selectedDate;

                return matchesSearch && matchesCategory && matchesLocation && matchesDate;
            });

            // Sort events by date (earliest first)
            currentFilteredEvents.sort((a, b) => new Date(a.date) - new Date(b.date));

            renderVisibleEvents();
        }

        /**
         * Renders a subset of the currently filtered events to the DOM.
         */
        function renderVisibleEvents() {
            eventCardsContainer.innerHTML = ''; // Clear existing cards

            const eventsToDisplay = currentFilteredEvents.slice(0, eventsToShow);

            eventsToDisplay.forEach(event => {
                const eventDate = new Date(event.date);
                const hoursLeft = (eventDate - new Date()) / (1000 * 60 * 60);
                const reminderSoon = hoursLeft > 0 && hoursLeft <= 24; // Within 24 hours

                const card = document.createElement("div");
                card.className = "bg-white border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300";

                card.innerHTML = `
                    <div class="relative">
                        <img src="${event.image}" alt="${event.title}" class="w-full h-48 object-cover">
                        <span class="absolute top-2 left-2 bg-indigo-600 text-white text-xs px-2 py-1 rounded">${event.type}</span>
                        <span class="absolute bottom-2 left-2 ${event.price === 'Free' ? 'bg-green-500' : 'bg-yellow-500'} text-white text-xs px-2 py-1 rounded">${event.price}</span>
                        ${reminderSoon ? `<span class="absolute top-2 right-2 bg-yellow-400 text-black text-xs px-2 py-1 rounded">Starts in ${Math.ceil(hoursLeft)}h</span>` : ""}
                    </div>
                    <div class="p-6">
                        <div class="flex justify-between items-start mb-2">
                            <h3 class="text-xl font-bold">${event.title}</h3>
                            <span class="text-sm text-gray-500">${eventDate.toLocaleDateString()} ${eventDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                        </div>
                        <p class="text-gray-600 mb-4">${event.description}</p>
                        <div class="flex items-center mb-4">
                            <img src="${event.organizerLogo}" alt="${event.organizer}" class="w-8 h-8 rounded-full mr-2">
                            <span class="text-sm font-medium">${event.organizer}</span>
                        </div>
                        <div class="flex justify-between items-center">
                            <span class="text-sm text-gray-500"><i class="fas fa-users mr-1"></i> ${event.attendees} registered</span>
                            <button onclick="openModal('${event.id}')" class="mt-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">View Details</button>
                        </div>
                    </div>
                `;
                eventCardsContainer.appendChild(card);
            });

            // Hide "Load More" button if all filtered events are shown
            if (eventsToShow >= currentFilteredEvents.length) {
                loadMoreEventsBtn.classList.add('hidden');
            } else {
                loadMoreEventsBtn.classList.remove('hidden');
            }
        }

        // Event Listeners for filters
        searchEventsInput.addEventListener('input', () => {
            eventsToShow = 3; // Reset load count on filter change
            filterAndRenderEvents();
        });
        categoryFilter.addEventListener('change', () => {
            eventsToShow = 3;
            filterAndRenderEvents();
        });
        locationFilter.addEventListener('change', () => {
            eventsToShow = 3;
            filterAndRenderEvents();
        });
        dateFilter.addEventListener('change', () => {
            eventsToShow = 3;
            filterAndRenderEvents();
        });


        loadMoreEventsBtn.addEventListener('click', () => {
            eventsToShow += 3; // Load 3 more events
            renderVisibleEvents();
        });

        // Initial render of events on page load
        filterAndRenderEvents();

        let currentEventId = null; // To store the ID of the event currently open in the modal

        function openModal(eventId) {
            currentEventId = eventId; // Store the current event ID
            const event = allEvents.find(e => e.id === eventId);
            if (!event) return;

            // Populate modal with event details
            document.getElementById('modalEventImage').src = event.image;
            document.getElementById('eventType').innerText = event.type;
            document.getElementById('eventPrice').innerText = event.price;
            document.getElementById('eventPrice').className = `bg-${event.price === 'Free' ? 'green-500' : 'yellow-500'} text-white text-xs px-2 py-1 rounded`; // Update color based on price
            document.getElementById('eventTitle').innerText = event.title;
            const eventDateTime = new Date(event.date);
            // Estimate end time as 2 hours after start for display
            const endTime = new Date(eventDateTime.getTime() + (2 * 60 * 60 * 1000));
            document.getElementById('eventDateDisplay').innerHTML = `<i class="far fa-calendar-alt mr-1"></i> ${eventDateTime.toLocaleDateString()} | <i class="far fa-clock mr-1"></i> ${eventDateTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})} - ${endTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}`;
            document.getElementById('eventLocation').innerText = event.location;
            document.getElementById('eventInstructor').innerText = event.instructor;
            document.getElementById('eventSeats').innerText = `${event.attendees}/${event.totalSeats} registered`;
            document.getElementById('eventDescription').innerText = event.description;

            const learnList = document.getElementById('eventLearnList');
            learnList.innerHTML = ''; // Clear previous learnings
            event.learnings.forEach(item => {
                const li = document.createElement('li');
                li.innerText = item;
                learnList.appendChild(li);
            });

            document.getElementById('organizerLogo').src = event.organizerLogo;
            document.getElementById('organizerName').innerText = event.organizer;
            document.getElementById('organizerDescription').innerText = event.organizerDesc;


            document.getElementById('eventModal').classList.remove('hidden');
            document.getElementById('eventModal').classList.add('flex');

            // Show Step 1 (description), hide others initially
            document.getElementById('modalStep1').classList.remove('hidden');
            document.getElementById('modalStep2').classList.add('hidden');
            document.getElementById('modalStep3').classList.add('hidden');
        }

        function closeModal() {
            document.getElementById('eventModal').classList.remove('flex');
            document.getElementById('eventModal').classList.add('hidden');
            currentEventId = null; // Clear current event ID
        }

        function showPaymentOptions() {
            const event = allEvents.find(e => e.id === currentEventId);
            if (event && event.price === 'Free') {
                // If event is free, skip payment and go straight to success
                document.getElementById('modalStep1').classList.add('hidden');
                document.getElementById('modalStep2').classList.add('hidden');
                document.getElementById('modalStep3').classList.remove('hidden');
                document.getElementById('modalStep3').querySelector('h4').innerText = '✅ Registration Successful!';
                document.getElementById('modalStep3').querySelector('p').innerText = 'You have successfully registered for this free event.';
            } else {
                document.getElementById('modalStep1').classList.add('hidden');
                document.getElementById('modalStep2').classList.remove('hidden');
            }
        }

        paymentForm.addEventListener('submit', handlePayment);

        function handlePayment(e) {
            e.preventDefault(); // Prevent default form submission

            const selectedPaymentMethod = document.querySelector('input[name="payment"]:checked').value;
            let paymentUrl = '';

            switch (selectedPaymentMethod) {
                case 'UPI':
                    paymentUrl = 'https://www.npci.org.in/what-we-do/upi/product-overview'; // Placeholder
                    break;
                case 'Card':
                    paymentUrl = 'https://www.hdfcbank.com/personal/pay/cards/credit-cards/pay-credit-card-bill'; // Placeholder
                    break;
                case 'NetBanking':
                    paymentUrl = 'https://retail.onlinesbi.sbi/retail/login.htm'; // Placeholder
                    break;
                default:
                    paymentUrl = 'https://example.com/payment-error';
            }

            const event = allEvents.find(e => e.id === currentEventId);
            const amount = event && event.price !== 'Free' ? parseFloat(event.price.replace('$', '')) : 0;

            if (amount > 0) {
                window.open(paymentUrl + amount, '_blank'); // Open payment gateway in new tab
            } else {
                // For free events, or if amount is 0, directly show success
                document.getElementById('modalStep1').classList.add('hidden');
                document.getElementById('modalStep2').classList.add('hidden');
                document.getElementById('modalStep3').classList.remove('hidden');
                document.getElementById('modalStep3').querySelector('h4').innerText = '✅ Registration Successful!';
                document.getElementById('modalStep3').querySelector('p').innerText = 'You have successfully registered for this event.';
            }

            // After simulating payment, you might want to show success in modal or close it
            // For now, we'll just show the success message in the modal after a short delay
            setTimeout(() => {
                document.getElementById('modalStep2').classList.add('hidden');
                document.getElementById('modalStep3').classList.remove('hidden');
            }, 1000); // simulate delay
        }


        viewAllInstitutesBtn.addEventListener('click', () => {
            alert('Navigating to All Institutes page or section!');
            // Example: window.location.href = 'all-institutes.html';
        });