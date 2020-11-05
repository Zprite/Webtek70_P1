

table = ""

lastLine = "\n"
first = True
with open('v1.dat', 'r') as f:
    data = f.readlines()
    
    for line in data:
        if (lastLine == "\n"):
            if (line == "\n"):
                if not first:
                    table += "</tr>"
                table += "<tr>"
        if (line != "\n"):
            l = line.strip()
            table += "<td>" + l + "</td>"
        first = False
            
        lastLine = line
            
print(table)