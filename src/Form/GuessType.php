<?php

namespace App\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\IntegerType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\FormBuilderInterface;

class GuessType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('guess', IntegerType::class, [
                'label' => 'Write your guess here',
                'attr' => ['class' => 'form-control', 'placeholder' => 'Enter your guess'],
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'Submit Guess',
                'attr' => ['class' => 'btn btn-primary mt-3'],
            ]);
    }
}
