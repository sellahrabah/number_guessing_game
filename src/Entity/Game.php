<?php

namespace App\Entity;

use App\Repository\GameRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: GameRepository::class)]
class Game
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(type: Types::DATETIME_MUTABLE)]
    private ?\DateTimeInterface $playedAt = null;

    #[ORM\Column(length: 255)]
    #[Assert\Choice(choices: ['easy', 'medium', 'hard'])]
    private ?string $difficulty = null;

    /**
     * @var Collection<int, Player>
     */
    #[ORM\OneToMany(targetEntity: Player::class, mappedBy: 'game', cascade: ['persist', 'remove'])]
    private Collection $players;
    
    private ?int $numberOfPlayers = null;

    #[Assert\Count(min: 2, minMessage: 'You must have at least 2 players')]
    private array $playerNames = [];


    public function __construct()
    {
        $this->players = new ArrayCollection();
        $this->playedAt = new \DateTime(); 
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getPlayedAt(): ?\DateTimeInterface
    {
        return $this->playedAt;
    }

    public function setPlayedAt(\DateTimeInterface $playedAt): static
    {
        $this->playedAt = $playedAt;

        return $this;
    }

    public function getDifficulty(): ?string
    {
        return $this->difficulty;
    }

    public function setDifficulty(string $difficulty): static
    {
        $this->difficulty = $difficulty;

        return $this;
    }

    /**
     * @return Collection<int, Player>
     */
    public function getPlayers(): Collection
    {
        return $this->players;
    }

    public function addPlayer(Player $player): static
    {
        if (!$this->players->contains($player)) {
            $this->players->add($player);
            $player->setGame($this);
        }

        return $this;
    }

    public function removePlayer(Player $player): static
    {
        if ($this->players->removeElement($player)) {
            if ($player->getGame() === $this) {
                $player->setGame(null);
            }
        }

        return $this;
    }
    
    public function getNumberOfPlayers(): ?int
    {
        return $this->numberOfPlayers;
    }

    public function setNumberOfPlayers(?int $numberOfPlayers): static
    {
        $this->numberOfPlayers = $numberOfPlayers;
        return $this;
    }

    public function getPlayerNames(): array
    {
        return $this->playerNames;
    }

    public function setPlayerNames(array $playerNames): static
    {
        $this->playerNames = $playerNames;
        return $this;
    }
}
