<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <!-- 

    Name :- Yash H. Kataria
    Reg No :- 2047235

    -->
    
    <xsl:template match="/">
        <html>
            <head>
                <style>
                    h2
                    {
                        text-align:center;
                    }
                    td,th
                    {
                        font-size:larger;
                        padding:20px;
                        text-align:center;
                    }
                    th
                    {
                        background-color: greenyellow;
                    }
                </style>
            </head>
            <body>
                <h1 style="text-align:center;">Employee Management System</h1>
                <br/><br/>
                
                <!-- List of All Employees -->
                <div style="margin-left:auto;margin-right:auto;">
                    <h2>List of all Employees</h2>
                    <table border="2" align="center">
                        <tr>
                            <th>Employee ID</th>
                            <th>Employee Name</th>
                            <th>Age</th>
                            <th>Salary</th>
                            <th>Email ID</th>
                            <th>Phone Number</th>
                            <th>Designation</th>
                            <th>Promotion</th>
                        </tr>
                        <xsl:for-each select="Company/Employee">
                            <tr>
                                <td>
                                    <xsl:value-of select="@EmpID"/>
                                </td>
                                <td>
                                    <xsl:value-of select="EmpName"/>
                                </td>
                                <td>
                                    <xsl:value-of select="EmpAge"/>
                                </td>
                                <td>
                                    <xsl:value-of select="EmpSalary"/>
                                </td>
                                <td>
                                    <xsl:value-of select="EmpEmailId"/>
                                </td>
                                <td>
                                    <xsl:value-of select="EmpPhoneNumber"/>
                                </td>
                                <td>
                                    <xsl:value-of select="EmpDesignation"/>
                                </td>
                                <td>
                                    <xsl:if test="EmpAge &gt;= 50">
                                        <span style="color:red;font-weight:bolder;">Associate Project Manager</span>
                                    </xsl:if>
                                    <xsl:if test="(EmpAge &gt;= 40) and (EmpAge &lt;= 49)">
                                        <span style="color:red;font-weight:bolder;">Team Leader</span>
                                    </xsl:if>
                                    <xsl:if test="EmpAge &lt; 40">
                                        <span style="color:red;font-weight:bolder;">Developer</span>
                                    </xsl:if>
                                </td>
                            </tr>
                        </xsl:for-each>
                    </table>
                </div>                
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
