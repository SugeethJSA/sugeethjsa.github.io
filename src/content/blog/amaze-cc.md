---
title: "AmazeCC: My Journey with UniCC"
date: "2026-06-02"
description: "How I forked UniCC and built a comprehensive VTU companion app."
tags: [tech, app, college]
category: tech
---

AmazeCC

Hello guys,

Once in a lifetime, I think people get the opportunity to make things for the better. That's what one of my seniors did when he built UniCC (btw great respect for you Arya anna)

UniCC is an app that shows data from your VTOP in a clean and simple way.

Here I was during the summer holidays, and I thought the UniCC app was UI-wise didn't adapt to Desktop and mobile app guidelines a bit. I'm pretty new to WebDev. So I created a fork of the repo, and I started working on making it better. I used Antigravity a lot to help refine a few of the elements (and port features from other apps over coz I'm like new to WebDev) but I tried my best to make it look great for desktop and Android.

I put a pull request and asked anna to review, he said that he developed UniCC to achieve one-click access to the most important features in his life. Thus, he mentioned that he wouldn't be like accepting any UI changes for now, but he suggested that I could put it up as my own fork/app and develop it.

Link to my app: https://amaze-cc.vercel.app

So from June 2 till now, I've been working to make AmazeCC one of the best experiences possible for iOS, Android, and Desktop.

Features apart from UniCC:

Brand new sidebar for the Desktop and Tablet modes, collapsible

All new Profile Page with new settings to switch between Dayscholar and Hosteller, hide persistent UI cards on screens other than the main screen.

For Dayscholars, a bus feature has been implemented that allows you to search for buses along the route. And the app automatically calculates your attendance percentage against the 85% FFCS requirement instead of 75% main attendance requirement, available with a toggle in the profile section.

Custom name yourself

Share your timetable with friends, get timetables from friends, and put friends in group. When you click on the groups card, you see which group of friends are free as per timetable. For certain friends, you can click eye icon and you will be able to see a new common timetable option in the dashboard (attendance page) where you can view common schedules for your besties. - (Built from a clone of the VIT Verse app)

FFCSonTheGo -> feature imported: Helps you to set multiple timetables during FFCS when you upload the excel sheet provided by HOD, formated as per guidelines given (around FFCS time)

OD Hours - Now if anyone puts an OD by mistake in your name, it will show how many OD hours are Wasted : where present status is overridden by OD (accidental scenario). The OD hours panel has also been reworked with calendar, list views and heatmap of ODs used.

Attendance page revamped: The Attendance page has been revamped with attendance predictor (from UniCC) as well as list of attended classes that can be viewed in calendar, list and heatmap view. You can filter through which classes you have attended or missed, and you see whether you have gotten notes from your friends for that class. If yes, then click on notes button. It will show you a count of how many classes you have missed notes for.

The same attendance log revamp is also available overall for all classes under the clipboard button (i.e. tracker option) with all three views.

Question Bank Archive created with Papers tab as well as extracted questions tab, that way you don't have to browse through PDFs to get the questions. Crowdsourced by extracting questions from the QP with AI, and is admin supervised.

Academic Performance page (under Exams -> Grades option): Has Overview of your performance over time, with Spiderweb and line chart analysis; along with grades history and grade ranges, and a dedicated curriculum page.

Exam schedules has been turned into a card view format: making it easier for mobile view.

Marks Page revamp: For ACE curriculum students, the embedded theory and lab is unified into one single card. The marks page now has predictor features such as maximum attainable marks (based on lost weightage points), predicted total percentage of marks (based on your current performance). And it also has a beta grade prediction feature that calculates avg and SD for all of the assignments in your class, and presents in which grade band you lie for each assignment and test. It also has overall beta grade prediction, where the app predicts your grade using currently available data, and shows what is the maximum possible grade you can achieve, and how many marks are required to achieve your target grade, if you set one.

Features not yet implemented but config present:

Push Notifications

Features that will never be implemented:

Faculty Review: This is one of the features that got flagged and stricken down, and took down one of the most popular apps along with it. (Fare-thee-well, VIT Verse, one of the greatest OG third-party VTOP app)

How can I trust you with the grades prediction data? I don't want it to be misused.

The grades prediction feature is powered by Welford's Algorithm, which takes your marks, and processes them to calculate your standard deviation and mean. It then does not store your marks data and discards it. This is borrowed from UniCC, but upgraded to make it more effective. This implementation allows you to see your continuous grade statistics throughout the semester, thus allowing you to better target your grade and attain it. The entire app is open source, and you can use ChatGPT or claude to prompt and ask whether the app works as per the code written in the repo. Vercel pulls directly from this repo.

It depends on the honour system. By nature, the API trusts what data your app gives, i.e. what the user gives. This is the best possible way that I know of, to implement this feature. If you all have any better suggestions, please do give me.

By nature, grades prediction can only work if we have multiple data points that are processed. For the processing to happen securely and to ensure that no data conflict arises while creating statistics.

API:

I use a dual API approach. I retain the original UniCC API for the login and everything else (why break something that already works well?), while using my own API for storing Question Bank, dynamic Bus data, and upgraded experimental Grade prediction metrics.

Why call it AmazeCC, and why retain the original logo for now?

I call it AmazeCC, as I brand all of my apps or creations which were heavily AI-driven with the term "Amaze", as it's meant to be bleeding edge and explore stuff. I retain the original logo for now, as it my way of paying tribute to Arya anna.

Future Plans:

I plan to create an AmazeCC community that will maintain this app and upgrade it long after I've left college, and will be provided with the technical know-how and tools to do so, along with non-technical maintainers for the project.

This post is not AI generated. I typed it out fully on my own.

If you've got any features or suggestions or bugs found, feel free to reach out. And please remember, it's a hobbyist project: there will be mistakes and flaws - please report them and I will take my best effort to fix it, if possible given my constraints.












### Screenshots

![AmazeCC Screenshot](/images/5c923812a7c56cc9221a9b5b44976cb995a9da28.jpg)

![AmazeCC Screenshot](/images/c20bbdcf173c17428c741184953348aaab33bf9e.png)

![AmazeCC Screenshot](/images/3ef55911210211829053bb8acd17a476a098f4e2.jpg)

![AmazeCC Screenshot](/images/d71dc867d76929ff42fc48f50a82fd36427694fd.jpg)

![AmazeCC Screenshot](/images/794d1aa4bd0e0b7ccbf61f880ae226c271275352.jpg)

![AmazeCC Screenshot](/images/b6e3e0b76bde24ed31511999bd84b4f9fb32b491.jpg)

![AmazeCC Screenshot](/images/1485522b65989f3cf439cec390ad106e06e34323.jpg)

![AmazeCC Screenshot](/images/9febb39feba7d87ef5425f370e835cf829a48c90.jpg)

![AmazeCC Screenshot](/images/303fe811282042c06a191f86a7f724eb92060c18.jpg)

![AmazeCC Screenshot](/images/358aafa4e6ba48340fec97d933e8f5c7d21f359f.jpg)

![AmazeCC Screenshot](/images/7ba31625f9698b21fee1236ced681219414c9c5c.png)

![AmazeCC Screenshot](/images/47823d1b66e1e32d53113bc3c24f1ea15dca55c7.png)

![AmazeCC Screenshot](/images/c20bbdcf173c17428c741184953348aaab33bf9e.png)

![AmazeCC Screenshot](/images/8dfe959da1e7099752a963d29643271e770dfe6a.jpg)

![AmazeCC Screenshot](/images/f3c2bef804abf7132f04eaf64c650e5f0a347865.jpg)

![AmazeCC Screenshot](/images/fa9be975fbae39c30ed294be7252de586474583d.jpg)

![AmazeCC Screenshot](/images/6080c8307647c323a612a865366606b091f4a91f.jpg)

![AmazeCC Screenshot](/images/c83d611ec992440e035189233aa7aeed0852e25c.png)

![AmazeCC Screenshot](/images/20cd6e4bef771448a3fcd8d828dcf610504792dd.jpg)

![AmazeCC Screenshot](/images/e832b1ed62753b96fef02f6f570d9c710d1e0ff0.jpg)

![AmazeCC Screenshot](/images/92472cf52e81d540e51fb23eb82ef0f8c672c3db.jpg)

![AmazeCC Screenshot](/images/99b280a6e17811da59b0a4f6158570b9c1fec181.png)