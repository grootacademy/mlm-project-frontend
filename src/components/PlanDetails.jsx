import React from 'react'

const PlanDetails = () => <div className="mt-4">
    <h1>Membership Completion Guide</h1>

    <p>This guide helps you understand when a memberhip can be completed based on certain conditions. </p>

    <p>
        Here is what it means for you:
    </p>

    <ul>
        <li>If your earned amount is between 25% and 50% of the total cost and it is been at least 21 days
            since you started, you can complete the transaction.</li>
        <li>If your earned amount is between 50% and 75% of the total cost and it is been at least 14 days, you can
            complete
            the transaction.</li>
        <li>If your earned amount is between 75% and 100% of the total cost and it is been at least 7 days, you can
            complete
            the transaction.</li>
        <li>If your earned amount is equal to or greater than the total cost, you can complete the transaction.</li>
    </ul>
</div>

export default PlanDetails
