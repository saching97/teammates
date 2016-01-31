<%@ tag description="displayDetails.tag - Displays instructor list on student course details page" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/functions" prefix="fn" %>

<c:forEach items="${data.studentCourseDetailsPanel.instructors}" var="instructor">
    <c:if test="${instructor.displayedToStudents}">
        ${fn:escapeXml(instructor.displayedName)}:
        <a href="mailto:${fn:escapeXml(instructor.email)}">
            ${fn:escapeXml(instructor.name)} (${fn:escapeXml(instructor.email)})
        </a>
        <br>
    </c:if>
</c:forEach>