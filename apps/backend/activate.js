const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  const result = await prisma.user.updateMany({
    where: { status: 'PENDING' },
    data: { status: 'ACTIVE' }
  });
  console.log(`Activated ${result.count} user(s).`);
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
