# Phase 1 Project - Peaky Blinders Fan Page
This repository is a project for Flatiron school phase 1. It is a Peaky Blinders (https://en.wikipedia.org/wiki/Peaky_Blinders_(TV_series)) fan page created using what we have learned in the course so far to include HTML, CSS, and Javascript. Data for the website will be stored in a db.JSON file using a JSON server.

The idea of this project came from my personal enjoyment from the TV series, in lue of the upcoming and final season.

The interactivity of this website will include the ability to scroll through a list of 5 Peaky Blinders characters totaling 10 characters. These characters will have a picture, with name and some basic info attached. There will be a vote button where fans of Peaky Blinders can vote for their favorite character and the amount of votes will dynamically be updated to the DOM. The bottom left of the website will have a click event that shows the picture of the currently highest voted character, and the bottom right of the website will have a playable video trailer of the TV series. Between the highest voted character and the video trailer will be a form where you can submit an additional character that should be added to the fan page, that produces an alert that your submission will be considered!

In this project I will use images from Google that stem from the Peaky Blinders fandom wiki for the TV series characters, and will credit with links below. I will also use an official Peaky Blinders TV series trailer for season 6 from https://www.youtube.com/watch?v=2nsT9uQPIrk, credit to BBC.

As this is a school project, no contributions will be accepted for the fan page, though I appreciate the thought in advance. For any support please contact awoods7753@gmail.com.

Enjoy!


All Character images come from the fandom website : https://peaky-blinders.fandom.com/wiki/. Below are their direct image URLs.

Thomas Shelby: https://www.google.com/search?q=peaky+blinder&tbm=isch&chips=q:peaky+blinder,g_1:tommy:xCOzxrcrqo8%3D&rlz=1C1CHBF_enUS839US839&hl=en&sa=X&ved=2ahUKEwi8pMnd4tD2AhWWCJ0JHYTuB8AQ4lYoAHoECAEQHQ&biw=1663&bih=907#imgrc=j6ort8azI8RAaM

Arthur Shelby: https://www.google.com/search?q=peaky+blinder&tbm=isch&chips=q:peaky+blinder,g_1:arthur:HwsDagXW-6g%3D&rlz=1C1CHBF_enUS839US839&hl=en&sa=X&ved=2ahUKEwi8pMnd4tD2AhWWCJ0JHYTuB8AQ4lYoBHoECAEQJQ&biw=1663&bih=850#imgrc=qPvWBWoDCx8e4M

John Shelby: https://www.google.com/search?q=peaky+blinder+characters&tbm=isch&hl=en&chips=q:peaky+blinder+characters,g_1:john:TL38URbvhNU%3D&rlz=1C1CHBF_enUS839US839&sa=X&ved=2ahUKEwjA5OT-4tD2AhXJCZ0JHTfSAKwQ4lYoAXoECAEQIA&biw=1663&bih=850#imgrc=c2kKzN2782BWfM

Michael Grey: https://www.google.com/search?q=peaky+blinder+characters&tbm=isch&hl=en&chips=q:peaky+blinder+characters,g_1:john:TL38URbvhNU%3D,online_chips:michael+gray:Xee1gZ1kxBw%3D&rlz=1C1CHBF_enUS839US839&sa=X&ved=2ahUKEwjTxIGA49D2AhVCCZ0JHVPRA28Q4lYoAnoECAEQJA&biw=1663&bih=850

Finn Shelby: https://www.google.com/search?q=peaky+blinder+characters&tbm=isch&hl=en&chips=q:peaky+blinder+characters,g_1:john:TL38URbvhNU%3D,online_chips:michael+gray:Xee1gZ1kxBw%3D,online_chips:finn+shelby:lij2UWpTfbY%3D&rlz=1C1CHBF_enUS839US839&sa=X&ved=2ahUKEwjAwLKM49D2AhWQA50JHd5AB4YQ4lYoAHoECAEQIg&biw=1663&bih=850#imgrc=XGgMDA0Z02iPFM

Polly Shelby: https://www.google.com/search?q=peaky+blinder+characters&tbm=isch&hl=en&chips=q:peaky+blinder+characters,g_1:john:TL38URbvhNU%3D,online_chips:michael+gray:Xee1gZ1kxBw%3D,online_chips:polly+shelby:uFnRMWoO4w0%3D&rlz=1C1CHBF_enUS839US839&sa=X&ved=2ahUKEwjAwLKM49D2AhWQA50JHd5AB4YQ4lYoAXoECAEQJA&biw=1663&bih=850#imgrc=jQXy8AY_9L-MdM

Alfie Solomons: https://www.google.com/search?q=peaky+blinder+characters+names&tbm=isch&hl=en&chips=q:peaky+blinder+characters+names,online_chips:tom+hardy:_9zprkbADVE%3D&rlz=1C1CHBF_enUS839US839&sa=X&ved=2ahUKEwjb6Km-49D2AhXYPs0KHSvnDtoQ4lYoBHoECAEQJg&biw=1663&bih=850#imgrc=oIlqcMmJVTFXQM

Ada Shelby: https://www.google.com/search?q=peaky+blinder+shelbys+list&tbm=isch&hl=en&chips=q:peaky+blinder+shelbys+list,online_chips:ada+shelby:cFjSMC6Z8-M%3D&rlz=1C1CHBF_enUS839US839&sa=X&ved=2ahUKEwiFqMCB5ND2AhWfCJ0JHX2zBQwQ4lYoCHoECAEQLg&biw=1663&bih=850#imgrc=OVzfezBjOOrvrM

Freddie Thorne: https://www.google.com/search?q=peaky+blinder+adas+husband&tbm=isch&ved=2ahUKEwii_6uL5ND2AhVYBc0KHfrrAcQQ2-cCegQIABAA&oq=peaky+blinder+adas+husband&gs_lcp=CgNpbWcQAzoHCCMQ7wMQJzoFCAAQgAQ6CwgAEIAEELEDEIMBOgYIABAIEB46BAgAEBg6BggAEAoQGFDACVjBFmCXF2gCcAB4AIABsgGIAfYKkgEEMTYuMZgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=cRE1YuKCItiKtAb614egDA&bih=850&biw=1663&rlz=1C1CHBF_enUS839US839&hl=en#imgrc=-OPYLn6KSxEUVM

Grace Shelby: https://www.google.com/search?q=peaky+blinders&tbm=isch&hl=en&chips=q:peaky+blinders,g_1:grace:d7HbLHCMXTs%3D&rlz=1C1CHBF_enUS839US839&sa=X&ved=2ahUKEwi9vsut5ND2AhXLkmoFHWgSDNYQ4lYoB3oECAEQKw&biw=1663&bih=850#imgrc=O12McCzbsXcrgM
