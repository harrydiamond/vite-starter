module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",
      {
        "sourceMaps": true,

        "jsc": {
          "parser": {
            "syntax": "typescript",
            "tsx": true
          },

          "transform": {
            "react": {
              "runtime": "automatic"
            }
          }
        }
      }
    ]
  },
  setupFilesAfterEnv: [
    "<rootDir>/helpers/setupTests.ts"
  ],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css)$': '<rootDir>/helpers/fileTransformer.js',
  },
  modulePathIgnorePatterns: [
    "<rootDir>/public"
  ]
};
