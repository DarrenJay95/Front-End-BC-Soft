import { Card, Image, Text, Badge, Button, Group } from '@mantine/core';

export function Pokemon() {
    return (
        <Card shadow="md" padding="lg" radius="lg" withBorder>
            <Card.Section>
                <Image
                    // src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                    height={200}
                    alt="Pokemon"
                />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>Pokemon Info</Text>
                <Badge color="red">Fire type</Badge>
            </Group>

            <Text size="sm" c="dimmed" lineClamp={1}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Ipsam molestiae iure veritatis magnam, perferendis ipsum
                repudiandae corporis eveniet dolore placeat blanditiis
                dignissimos quisquam quia ad consectetur modi eum est maiores.
            </Text>

            <Button variant='light' fullWidth mt="md" radius="md">
                Pokemon
            </Button>
        </Card>
    );
}