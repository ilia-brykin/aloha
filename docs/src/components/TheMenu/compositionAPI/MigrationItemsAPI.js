export default function MigrationItemsAPI() {
  const migrationItems = {
    id: "migrations",
    label: "Migrations",
    icon: "Shuffle",
    children: [
      {
        id: "migration_1_2_x-2_0_x",
        label: "Migration 1.2.x -> 2.0.x",
        to: {
          name: "PageMigrationsVersion1To2",
        },
      },
    ],
  };

  return {
    migrationItems,
  };
}
