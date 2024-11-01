// Task 1: Setup HTML Structure for the Ticket System (Refer to html file)

// Task 2: Fetch Tickets Using Async/Await and Handle Errors
const ticketList = document.getElementById('displayingTickets');

// Async function to fetch Unresolved Tickets
async function displayUnresolvedTickets(id) {
    try {
        const ticketResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!ticketResponse.ok) {
            throw new Error('Failed to fetch ticket data');
        }
        const ticketId = await ticketResponse.json();
        console.log('Ticket ID:', ticketId);

        const customerResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${userId}`);
        if (!customerResponse.ok) {
            throw new Error('Failed to fetch customers');
        }
        const userId = await ordersResponse.json();
        console.log('Customer Name:', userId);
        // Task 3: Display Tickets Dynamically on the Page
        ticketId.forEach(ticket => {
            const listItem = document.createElement('li');
            listItem.textContent = `Ticket Id: ${ticket.id}, Info: ${ticket.userId} ${ticket.title} ${ticket.body}`;
            ticketList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error:', error.message);
    }
    // Task 4: Use finally to Ensure Cleanup
    finally {
    console.log('Closing Unresolved Tickets');
}}


displayUnresolvedTickets(1)