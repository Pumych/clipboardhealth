# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

1. [~1h] Add a new column to the Agents table called `external_id`. This will be the id that Facilities will use to identify Agents.
    - Acceptance criteria: The new column is added to the Agents table and is visible in the database.
    - Details: A new column can be added to the Agents table using a SQL query. The column should be named `external_id` and have a data type of VARCHAR(255).
2. [~3h] Add a new endpoint to the API that allows Facilities to update the `external_id` of an Agent. This endpoint should take the Agent's internal id and the new `external_id` as parameters.
    - Acceptance criteria: The new endpoint is added to the API and is accessible to Facilities.
    - Details: We'll create a new endpoint in our API that can handle PUT requests to update the `external_id` of an Agent
3. [~2h] Update the `getShiftsByFacility` function to include the `external_id` for each Agent.
    - Acceptance criteria: The getShiftsByFacility function returns the custom id for each Agent in the Shifts table.
    - Details: The getShiftsByFacility function can be updated to include the custom id for each Agent by joining the Agents table with the Shifts table on the Agent id.
4. [~2h] Update the `generateReport` function to use the `external_id` of each Agent instead of their internal id.
    - Acceptance criteria: The generateReport function uses the custom id for each Agent in the Shifts table.
    - Details: The generateReport function can be updated to use the custom id for each Agent in the Shifts table by replacing the internal database id with the custom id.
