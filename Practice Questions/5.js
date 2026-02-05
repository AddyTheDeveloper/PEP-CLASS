// Question 5: Create a private settings object using closure with methods to read and update values.

function createSettings() {
    const settings = {};

    return {
        set: function (key, value) {
            settings[key] = value;
            console.log(`Setting '${key}' updated to '${value}'`);
        },
        get: function (key) {
            return settings[key];
        },
        getAll: function () {
            return { ...settings };
        }
    };
}

const appSettings = createSettings();
appSettings.set("theme", "dark");
appSettings.set("language", "en");
console.log(appSettings.get("theme"));
console.log(appSettings.getAll());
