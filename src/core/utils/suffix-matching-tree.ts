
interface Node<T> {
    readonly data: T[];
    readonly next: Map<string, Node<T>>;
}

export class SuffixMatchingTree<T> {
    private readonly root: Node<T> = emptyNode<T>();

    public add(suffix: string, data: T): this {
        let currentNode: Node<T> = this.root;
        for (let suffixIndex = suffix.length - 1; suffixIndex >= 0; --suffixIndex) {
            const currentLetter = suffix[suffixIndex];
            let nextNode = currentNode.next.get(currentLetter);
            if (nextNode == null) {
                nextNode = emptyNode<T>();
                currentNode.next.set(currentLetter, nextNode);
            }
            currentNode = nextNode;
        }

        currentNode.data.push(data);

        return this;
    }

    public match(input: string): T[] {
        const result: T[] = [];

        let currentNode: Node<T> = this.root;
        Array.prototype.push.apply(result, currentNode.data);

        for (let index = input.length - 1; index >= 0; --index) {
            const currentLetter = input[index];
            let nextNode = currentNode.next.get(currentLetter);
            if (nextNode == null) {
                break;
            }
            currentNode = nextNode;
            // Workaround. Input always starts from `$`. We want to filter out a full string match
            // when prefix is not a full string one (doesn't start with `$`)
            if (index > 1 || currentLetter === "$") {
                Array.prototype.push.apply(result, currentNode.data);
            }
        }
        return result;
    }
}

function emptyNode<T>() {
    return {
        data: [],
        next: new Map<string, Node<T>>(),
    };
}
