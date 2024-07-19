const mongoose = require('mongoose');
const Subject = require('../model/Subject');

const subjects = [
    {
        "name": "JAVA",
        "code": 101,
        "description": "A comprehensive course on Java programming language, covering its syntax, object-oriented principles, and various advanced features. This course is designed to provide a solid foundation in Java for beginners and also delve into advanced topics for experienced programmers. Students will learn through a combination of lectures, hands-on exercises, and projects.",
        "classes": [
            ["Introduction to Java", "This class covers the history and evolution of Java, the Java Virtual Machine (JVM), and the platform independence feature. Students will set up the development environment and write their first Java program."],
            ["Basic Syntax and Data Types", "An in-depth look at the basic syntax of Java, including data types, variables, and operators. Students will learn how to write basic Java programs using different data types and operators."],
            ["Control Flow Statements", "Detailed exploration of control flow statements such as if-else, switch-case, loops (for, while, do-while), and their usage in Java programs. Students will implement various examples to understand control flow better."],
            ["Object-Oriented Programming (OOP) Concepts", "Introduction to the fundamental concepts of OOP such as classes, objects, inheritance, polymorphism, encapsulation, and abstraction. Students will learn to create classes and objects, and understand the principles of OOP."],
            ["Exception Handling", "Comprehensive coverage of exception handling in Java, including try-catch blocks, multiple catch blocks, finally block, throw and throws keywords, and custom exceptions. Students will write programs to handle different types of exceptions effectively."],
            ["Java Collections Framework", "Detailed study of the Java Collections Framework, including interfaces like List, Set, Map, and their implementations such as ArrayList, LinkedList, HashSet, TreeSet, HashMap, and TreeMap. Students will learn to manipulate collections and perform various operations on them."],
            ["File I/O and Serialization", "Introduction to file handling in Java, covering reading and writing files using various classes like FileReader, FileWriter, BufferedReader, BufferedWriter, and serialization. Students will work on programs to read from and write to files and serialize objects."],
            ["Multithreading and Concurrency", "In-depth exploration of multithreading and concurrency in Java. Topics include thread lifecycle, creating and managing threads, synchronization, and concurrency utilities. Students will write multithreaded programs and understand the concepts of thread safety and concurrency issues."],
            ["Java Networking", "An overview of Java networking concepts, including the basics of networking, TCP/IP protocols, and Java classes for networking such as URL, HttpURLConnection, Socket, and ServerSocket. Students will create simple client-server applications to understand network programming."],
            ["Java GUI Development", "Introduction to building graphical user interfaces (GUIs) in Java using the Swing and JavaFX libraries. Topics include creating windows, handling events, and adding components like buttons, text fields, and menus. Students will develop interactive GUI applications."]
        ],
        "changes": [{}]
    }
];

const insertSubjects = async() => {
mongoose.connect('mongodb+srv://sneilhhh:tRtbGJZNVRbJDlGB@cluster0.foa5oyg.mongodb.net/LMS?retryWrites=true&w=majority&appName=Cluster0', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Database connected');
        return Subject.insertMany(subjects);
    })
    .then(() => {
        console.log('Data inserted');
        return mongoose.disconnect();
    })
    .catch((error) => {
        console.error('Error:', error);
    });

    
}
module.exports = insertSubjects;
