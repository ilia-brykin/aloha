export default function MigrationItemsAPI() {
  const migrationItems = {
    id: "migrations",
    label: "Migrations",
    icon: "Shuffle",
    class: "test_menu_migrations",
    children: [
      {
        id: "migration_1_2_x-2_0_x",
        label: "Migration 1.2.x -> 2.0.x",
        class: "test_menu_migration_1_2_x-2_0_x",
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
