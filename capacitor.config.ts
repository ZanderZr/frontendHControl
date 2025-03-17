import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'hcontrol',
  webDir: 'dist/hcontrol/browser',
  plugins: {
    server: {
      androidScheme: 'https',
      hostname: 'app.hcontrol.com'
    },
    CapacitorSQLite: {
      iosDatabaseLocation: 'Library/CapacitorDatabase',
      iosIsEncryption: true,
      iosKeychainPrefix: 'angular-sqlite-app-starter',
      iosBiometric: {
        biometricAuth: false,
        biometricTitle : "Biometric login for capacitor sqlite"
      },
      androidIsEncryption: true,
      androidBiometric: {
        biometricAuth : false,
        biometricTitle : "Biometric login for capacitor sqlite",
        biometricSubTitle : "Log in using your biometric"
      },
      electronIsEncryption: true,
      electronWindowsLocation: "C:\\ProgramData\\CapacitorDatabases",
      electronMacLocation: "/Volumes/Development_Lacie/Development/Databases",
      electronLinuxLocation: "Databases"
    },
    Filesystem: {
      permissions: {
        publicStorage: {
          description: 'Permiso necesario para guardar archivos en el almacenamiento público',
        },
      },
      webUseUnstableCreateFile: true, // Habilitar la creación de archivos inestables en la web
    },
    ScreenOrientation: {}
  },
};

export default config;
