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
        console.log('Ticket ID:', ticketId); // Only ticket by id are displayed in console for filtering
        
        // Task 3: Display Tickets Dynamically on the Page
         const apiUrl = 'https://jsonplaceholder.typicode.com/posts';
         
         fetch(apiUrl)
         .then(response => response.json())
         .then(tickets => {
             tickets.forEach(ticket => {
             const listItem = document.createElement('li');
             listItem.textContent = `Ticket Id: ${ticket.id}, Customer Name: ${ticket.userId}, Issue: ${ticket.title}, Details: ${ticket.body}`;
             ticketList.appendChild(listItem); // All tickets are displayed on the page
         });
     })
    } catch (error) {
        console.error('Error:', error.message); // Catches any errors 
    }
    // Task 4: Use finally to Ensure Cleanup
    finally {
        console.log('Closing Unresolved Tickets'); // Displays message: 'Closing Unresolved Tickets'
}
    }
    displayUnresolvedTickets(1); // This console logs ticket 1 (Works with Task 2)
