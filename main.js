// Task 1: Setup HTML Structure for the Ticket System (Refer to html file)

// Task 2: Fetch Tickets Using Async/Await and Handle Errors
async function checkInventory(productId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${productId}`);
        
        if (!response.ok) {
            throw new Error('Tickets not found');
        }

        const product = await response.json();
        return product;
    } catch (error) {
        console.error('Error:', error.message);
    }
}
