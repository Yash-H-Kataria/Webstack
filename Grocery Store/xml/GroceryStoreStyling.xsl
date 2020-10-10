<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <style>
            div
            {
                text-align:center;
                height:500px; 
                width:48%;
                <!-- border:2px solid black; -->
            }
            td,th
            {
                font-size:larger;
                padding:20px;
                text-align:center !important;
            }
                </style>
            </head>
            <body>
                <h1 style="text-align:center;">Y-Mart Grocery Store</h1>
                
                <!-- List of all Biscuits -->
                <div style="float:left;">
                    <h2>List of all Biscuits</h2>
                    <table border="2" align="center">
                        <tr bgcolor="#9acd32">
                            <th style="text-align:left">Product Name</th>
                            <th style="text-align:left">Category</th>
                            <th style="text-align:left">ExpiryDate</th>
                            <th style="text-align:left">Price</th>
                            <th style="text-align:left">Quantity</th>
                        </tr>
                        <xsl:for-each select="GroceryStore/Product[Category = 'Biscuit']">
                            <!-- <xsl:variable name="str" value = "Biscuit" />
                            <xsl:if test="Category = 'Biscuit'"> -->
                                <tr>
                                    <td>
                                        <xsl:value-of select="ProductName"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="Category"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="ExpiryDate"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="Price"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="Quantity"/>
                                    </td>
                                </tr>
                            <!-- </xsl:if> -->
                        </xsl:for-each>
                    </table>
                </div>

                <!-- List of all Waffers -->
                <div style="float:right;">
                    <h2>List of all Waffers</h2>
                    <table border="2" align="center">
                        <tr bgcolor="#9acd32">
                            <th style="text-align:left">Product Name</th>
                            <th style="text-align:left">Category</th>
                            <th style="text-align:left">ExpiryDate</th>
                            <th style="text-align:left">Price</th>
                            <th style="text-align:left">Quantity</th>
                        </tr>
                        <xsl:for-each select="GroceryStore/Product[Category = 'Waffer']">
                            <!-- <xsl:variable name="str" value = "Waffer" />
                            <xsl:if test="Category = 'Waffer'"> -->
                                <tr>
                                    <td>
                                        <xsl:value-of select="ProductName"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="Category"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="ExpiryDate"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="Price"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="Quantity"/>
                                    </td>
                                </tr>
                            <!-- </xsl:if> -->
                        </xsl:for-each>
                    </table>
                </div>

                <!-- List of All Employees -->
                <div style="float:left;height:550px;">
                    <h2>List of all Employee</h2>
                    <table border="2"  align="center">
                        <tr bgcolor="#9acd32">
                            <th style="text-align:left">Employee Name</th>
                            <th style="text-align:left">Salary</th>
                        </tr>
                        <xsl:for-each select="GroceryStore/Employee">
                            <tr>
                                <td>
                                    <xsl:value-of select="EmployeeName"/>
                                </td>
                                <td>
                                    <xsl:value-of select="Salary"/>
                                </td>
                            </tr>
                        </xsl:for-each>
                    </table>
                </div>

                <!-- List of All Employees With Salary less then or equal to 20000 -->
                <div style="float:right;height:550px;">
                    <h2>List of all Employee With Salary less then or equal to 20000</h2>
                    <table border="2"  align="center">
                        <tr bgcolor="#9acd32">
                            <th style="text-align:left">Employee Name</th>
                            <th style="text-align:left">Salary</th>
                        </tr>
                        <xsl:for-each select="GroceryStore/Employee">
                            <xsl:if test="Salary &lt;= 20000"> 
                                <tr>
                                    <td>
                                        <xsl:value-of select="EmployeeName"/>
                                    </td>
                                    <td>
                                        <xsl:value-of select="Salary"/>
                                    </td>
                                </tr>
                            </xsl:if>
                        </xsl:for-each>
                    </table>
                </div>

            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>
