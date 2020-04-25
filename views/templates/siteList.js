siteListTemplate = `
<% if (sites.length) { %>
    <table>
        <tr>
            <th class="tbl-custom-sm"> ID </th>
            <th class="tbl-custom-sm"> Name </th>
            <th class="tbl-custom-md"> Profile Img </th>
            <th class="tbl-custom-lg"> URL </th>
        </tr>
        <% sites.forEach(function(site){ %>
            <tr>
                <td><%= site.id %></td>
                <td><%= site.name %></td>
                <td> <img src="<%= site.icon %>" class="img-thumbnail img-custom"></td>
                <td><%= site.url %></td>
            </tr>
        <% }); %>
    </table>
<%} else { %>
    <p class="text-info">Click "Load Data" button to view site list</p> 
<% } %>
`;
exports.siteListTemplate = siteListTemplate;